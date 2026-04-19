/**
 * Utility functions for browser-side Web Crypto API E2E encryption.
 */

// Helper: Convert ArrayBuffer to Hex String
export function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Helper: Convert Hex String to Uint8Array
export function hexToBuffer(hex: string): Uint8Array {
  const match = hex.match(/.{1,2}/g);
  if (!match) return new Uint8Array();
  return new Uint8Array(match.map(byte => parseInt(byte, 16)));
}

// Generate P-256 ECDH Key Pair
export async function generateClientKeys(): Promise<CryptoKeyPair> {
  return await window.crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true, // extractable
    ['deriveKey', 'deriveBits']
  );
}

// Export Public Key as Raw Hex (Node expects raw buffer/hex for ECDH public keys)
export async function exportPublicKey(key: CryptoKey): Promise<string> {
  const exported = await window.crypto.subtle.exportKey('raw', key);
  return bufferToHex(exported);
}

// Import Server's Raw Public Key (Hex)
export async function importServerPublicKey(hexKey: string): Promise<CryptoKey> {
  const keyBuffer = hexToBuffer(hexKey);
  return await window.crypto.subtle.importKey(
    'raw',
    keyBuffer.buffer,
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    []
  );
}

// Derive Shared Secret (AES-GCM Key)
export async function deriveSharedSecret(privateKey: CryptoKey, serverPublicKey: CryptoKey): Promise<CryptoKey> {
  return await window.crypto.subtle.deriveKey(
    { name: 'ECDH', public: serverPublicKey },
    privateKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Encrypt payload
export async function encryptPayload(key: CryptoKey, payload: any) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(JSON.stringify(payload));

  const ciphertextBuffer = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv.buffer },
    key,
    encoded
  );

  // Web Crypto API appends the Auth Tag to the end of the ciphertext.
  // We separate it for Node.js compatibility (which expects them separate).
  const ciphertextBytes = new Uint8Array(ciphertextBuffer);
  const encryptedPayload = ciphertextBytes.slice(0, ciphertextBytes.length - 16);
  const authTag = ciphertextBytes.slice(ciphertextBytes.length - 16);

  return {
    ciphertext: bufferToHex(encryptedPayload.buffer),
    iv: bufferToHex(iv.buffer),
    authTag: bufferToHex(authTag.buffer)
  };
}

// Decrypt payload
export async function decryptPayload(key: CryptoKey, encryptedHex: string, ivHex: string, authTagHex: string): Promise<any> {
  const iv = hexToBuffer(ivHex);
  const encrypted = hexToBuffer(encryptedHex);
  const authTag = hexToBuffer(authTagHex);

  // Combine ciphertext and auth tag for Web Crypto API
  const combined = new Uint8Array(encrypted.length + authTag.length);
  combined.set(encrypted);
  combined.set(authTag, encrypted.length);

  const decryptedBuffer = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv.buffer },
    key,
    combined.buffer
  );

  const decoded = new TextDecoder().decode(decryptedBuffer);
  return JSON.parse(decoded);
}
