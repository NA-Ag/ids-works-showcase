import express from 'express';
import cors from 'cors';
import { e2eCryptoMiddleware, createServerECDH, deriveSharedSecret } from '@ids/network-wizard';
import { initDB, queries } from '@ids/database-core';
import { setupRoutes } from './routes';
import path from 'path';
import os from 'os';

const activeSessions = new Map<string, Buffer>();

export const startServer = (port: number = 3007) => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const dbPath = path.join(os.homedir(), '.idsworks', 'admin-suite.db'); // Shared database file
  const { db } = initDB(dbPath);

  app.post('/api/handshake', (req, res) => {
    try {
      const { publicKey: clientPublicKeyHex } = req.body;
      if (!clientPublicKeyHex) return res.status(400).json({ error: 'Client public key is required' });

      const serverEcdh = createServerECDH();
      const serverPublicKeyHex = serverEcdh.getPublicKey('hex');
      const sharedSecret = deriveSharedSecret(serverEcdh, clientPublicKeyHex);
      const sessionId = Math.random().toString(36).substring(2, 15);
      
      activeSessions.set(sessionId, sharedSecret);

      res.json({ serverPublicKey: serverPublicKeyHex, sessionId });
    } catch (error) {
      console.error('Handshake error:', error);
      res.status(500).json({ error: 'Handshake failed' });
    }
  });

  const getSharedSecret = (req: express.Request) => {
    const sessionId = req.headers['x-e2e-session'] as string;
    return sessionId ? (activeSessions.get(sessionId) || null) : null;
  };
  
  app.use('/api', e2eCryptoMiddleware(getSharedSecret as any) as any);

  setupRoutes(app, db);

  return new Promise<void>((resolve, reject) => {
    const server = app.listen(port, '0.0.0.0', () => {
      console.log(`IDS Clinic Server running on port ${port}`);
      resolve();
    }).on('error', reject);
  });
};
