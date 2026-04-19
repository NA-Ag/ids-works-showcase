import { eq } from 'drizzle-orm';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { isValidCURP, isValidRFC } from './validators';

type DB = BetterSQLite3Database<typeof schema>;

export const insertStudent = (db: DB, student: typeof schema.students.$inferInsert) => {
  if (!isValidCURP(student.curp)) {
    throw new Error('CURP is invalid.');
  }
  return db.insert(schema.students).values(student).returning();
};

export const getStudents = (db: DB) => {
  return db.select().from(schema.students).all();
};

export const getStudentByCurp = (db: DB, curp: string) => {
  return db.select().from(schema.students).where(eq(schema.students.curp, curp)).get();
};

export const insertTutor = (db: DB, tutor: typeof schema.tutors.$inferInsert) => {
  if (tutor.rfc && !isValidRFC(tutor.rfc)) {
    throw new Error('RFC is invalid.');
  }
  return db.insert(schema.tutors).values(tutor).returning();
};

export const getGroups = (db: DB) => {
  return db.select().from(schema.groups).all();
};

export const enrollStudent = (db: DB, enrollment: typeof schema.enrollments.$inferInsert) => {
  return db.insert(schema.enrollments).values(enrollment).returning();
};
