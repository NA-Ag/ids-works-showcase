import { Express } from 'express';

export const setupRoutes = (app: Express, db: any) => {
  app.get('/api/books', (req, res) => {
    try {
      const books = db.select().from(require('@ids/database-core').books).all();
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  });

  app.get('/api/loans', (req, res) => {
    try {
      const loans = db.select().from(require('@ids/database-core').bookLoans).all();
      res.json(loans);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch loans' });
    }
  });

  app.post('/api/books', (req, res) => {
    try {
      const bookData = req.body;
      const { books } = require('@ids/database-core');
      const newBook = db.insert(books).values(bookData).returning().get();
      res.json(newBook);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert book' });
    }
  });
};
