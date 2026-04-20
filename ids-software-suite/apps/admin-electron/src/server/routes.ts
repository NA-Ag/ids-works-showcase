import { Express } from 'express';
import { queries, SqliteDatabase } from '@ids/database-core';

export const setupRoutes = (app: Express, db: any) => {
  // Students API
  app.get('/api/students', (req, res) => {
    try {
      const students = queries.getStudents(db);
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  });

  app.post('/api/students', (req, res) => {
    try {
      const studentData = req.body;
      const newStudent = queries.insertStudent(db, studentData);
      res.json(newStudent);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert student' });
    }
  });

  // Tutors API
  app.post('/api/tutors', (req, res) => {
    try {
      const tutorData = req.body;
      const newTutor = queries.insertTutor(db, tutorData);
      res.json(newTutor);
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message || 'Failed to insert tutor' });
    }
  });

  // Groups API
  app.get('/api/groups', (req, res) => {
    try {
      const groups = queries.getGroups(db);
      res.json(groups);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch groups' });
    }
  });
};
