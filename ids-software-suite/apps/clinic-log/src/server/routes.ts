import { Express } from 'express';

export const setupRoutes = (app: Express, db: any) => {
  app.get('/api/medical_visits', (req, res) => {
    try {
      const visits = db.select().from(require('@ids/database-core').medicalVisits).all();
      res.json(visits);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch medical visits' });
    }
  });

  app.post('/api/medical_visits', (req, res) => {
    try {
      const visitData = req.body;
      const { medicalVisits } = require('@ids/database-core');
      const newVisit = db.insert(medicalVisits).values(visitData).returning().get();
      res.json(newVisit);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert medical visit' });
    }
  });
};
