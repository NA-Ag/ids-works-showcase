import { Request, Response, NextFunction } from 'express';
import { decryptAESGCM, encryptAESGCM } from './crypto';

/**
 * Express Middleware that enforces End-to-End Encryption over local HTTP.
 * 
 * @param getSharedSecret A function that extracts a session ID from headers/cookies and returns the matching shared secret Buffer.
 */
export const e2eCryptoMiddleware = (getSharedSecret: (req: Request) => Buffer | null) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Bypass encryption check for the initial handshake endpoint
    if (req.path === '/api/handshake') {
      return next();
    }

    try {
      // 1. Authenticate the encrypted session
      const sharedSecret = getSharedSecret(req);
      if (!sharedSecret) {
        return res.status(401).json({ error: 'Missing E2E Crypto Session. Please handshake first.' });
      }

      // 2. Decrypt incoming payload (if any data is being sent)
      if (req.body && req.body.ciphertext && req.body.iv && req.body.authTag) {
        const decryptedStr = decryptAESGCM(req.body.ciphertext, sharedSecret, req.body.iv, req.body.authTag);
        req.body = JSON.parse(decryptedStr);
      }

      // 3. Intercept res.json() to automatically encrypt the outgoing response
      const originalJson = res.json.bind(res);
      res.json = (bodyObj: any) => {
        // If the route explicitly threw an error object, we can send it raw or encrypted.
        // For maximum security, we encrypt ALL outgoing JSON responses.
        const bodyStr = JSON.stringify(bodyObj);
        const encryptedPayload = encryptAESGCM(bodyStr, sharedSecret);
        return originalJson(encryptedPayload);
      };

      next();
    } catch (err) {
      console.error('[Network Wizard] E2E Decryption Error:', err);
      return res.status(400).json({ error: 'Invalid encrypted payload or corrupted session.' });
    }
  };
};
