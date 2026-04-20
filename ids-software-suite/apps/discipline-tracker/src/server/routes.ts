import { Express } from 'express';

export const setupRoutes = (app: Express, db: any) => {
  app.get('/api/discipline_records', (req, res) => {
    try {
      const records = db.select().from(require('@ids/database-core').disciplineRecords).all();
      res.json(records);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch records' });
    }
  });

  app.post('/api/discipline_records', (req, res) => {
    try {
      const recordData = req.body;
      const { disciplineRecords } = require('@ids/database-core');
      const newRecord = db.insert(disciplineRecords).values(recordData).returning().get();
      res.json(newRecord);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert record' });
    }
  });
};
