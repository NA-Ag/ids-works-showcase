import crypto from 'crypto';

/**
 * Creates an ECDH instance for the server over the secp256k1 curve.
 * This generates the server's public and private key pair.
 */
export const createServerECDH = () => {
  const ecdh = crypto.createECDH('secp256k1');
  ecdh.generateKeys();
  return ecdh;
};

/**
 * Derives a shared symmetric secret using the server's private key and the client's public key.
 * @param serverEcdh The server's ECDH instance
 * @param clientPublicKeyHex The client's public key (in hex format)
 * @returns A Buffer representing the shared secret
 */
export const deriveSharedSecret = (serverEcdh: crypto.ECDH, clientPublicKeyHex: string): Buffer => {
  return serverEcdh.computeSecret(clientPublicKeyHex, 'hex');
};

/**
 * Encrypts plaintext using AES-256-GCM.
 * @param text The plaintext string (usually stringified JSON)
 * @param sharedSecret The 32-byte shared secret buffer
 * @returns An object containing the ciphertext, initialization vector (iv), and auth tag (in hex)
 */
export const encryptAESGCM = (text: string, sharedSecret: Buffer) => {
  const iv = crypto.randomBytes(12); // 96-bit IV recommended for GCM
  
  // AES-256 requires a 32-byte key. The shared secret from prime256v1 is exactly 32 bytes.
  const cipher = crypto.createCipheriv('aes-256-gcm', sharedSecret, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');
  
  return {
    ciphertext: encrypted,
    iv: iv.toString('hex'),
    authTag
  };
};

/**
 * Decrypts AES-256-GCM ciphertext.
 * @param ciphertext The encrypted string in hex
 * @param sharedSecret The 32-byte shared secret buffer
 * @param ivHex The initialization vector in hex
 * @param authTagHex The authentication tag in hex
 * @returns The decrypted plaintext string
 */
export const decryptAESGCM = (ciphertext: string, sharedSecret: Buffer, ivHex: string, authTagHex: string): string => {
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  
  const decipher = crypto.createDecipheriv('aes-256-gcm', sharedSecret, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
};
