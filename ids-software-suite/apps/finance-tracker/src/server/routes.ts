import { Express } from 'express';
// Assuming queries will be updated in database-core, but for now we just structure it
// In a real implementation, we would import specific query functions here.

export const setupRoutes = (app: Express, db: any) => {
  // Get all payments
  app.get('/api/payments', (req, res) => {
    try {
      const payments = db.select().from(require('@ids/database-core').payments).all();
      res.json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch payments' });
    }
  });

  // Create payment
  app.post('/api/payments', (req, res) => {
    try {
      const paymentData = req.body;
      const { payments } = require('@ids/database-core');
      const newPayment = db.insert(payments).values(paymentData).returning().get();
      res.json(newPayment);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert payment' });
    }
  });
};
