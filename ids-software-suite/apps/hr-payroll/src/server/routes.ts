import { Express } from 'express';

export const setupRoutes = (app: Express, db: any) => {
  app.get('/api/employees', (req, res) => {
    try {
      const employees = db.select().from(require('@ids/database-core').employees).all();
      res.json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  });

  app.get('/api/incidences', (req, res) => {
    try {
      const incidences = db.select().from(require('@ids/database-core').incidences).all();
      res.json(incidences);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch incidences' });
    }
  });

  app.post('/api/incidences', (req, res) => {
    try {
      const incidenceData = req.body;
      const { incidences } = require('@ids/database-core');
      const newIncidence = db.insert(incidences).values(incidenceData).returning().get();
      res.json(newIncidence);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert incidence' });
    }
  });
};
