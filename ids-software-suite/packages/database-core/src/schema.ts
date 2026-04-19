import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';

// Tutors (Parents/Guardians)
export const tutors = sqliteTable('tutors', {
  id: text('id').primaryKey(), // We can use UUIDs or a specific string format
  rfc: text('rfc').unique(),
  name: text('name').notNull(),
  phone: text('phone'),
  email: text('email'),
});

// Students
export const students = sqliteTable('students', {
  id: text('id').primaryKey(), // e.g., Matrícula (24-001)
  curp: text('curp').notNull().unique(),
  name: text('name').notNull(),
  dob: text('dob'), // YYYY-MM-DD
  bloodType: text('blood_type'),
  medicalNotes: text('medical_notes'),
  status: text('status').notNull().default('Activo'), // Activo, Inactivo
});

// Linking Table: Many-to-Many relationship between students and tutors
export const studentTutors = sqliteTable('student_tutors', {
  studentId: text('student_id')
    .notNull()
    .references(() => students.id),
  tutorId: text('tutor_id')
    .notNull()
    .references(() => tutors.id),
  relationship: text('relationship').notNull(), // Padre, Madre, Tutor
}, (t) => ({
  pk: primaryKey({ columns: [t.studentId, t.tutorId] }),
}));

// Academic Groups (Classrooms)
export const groups = sqliteTable('groups', {
  id: text('id').primaryKey(),
  level: text('level').notNull(), // Primaria, Secundaria, etc.
  grade: text('grade').notNull(), // 1º, 2º, etc.
  identifier: text('identifier').notNull(), // A, B, C
});

// Enrollments
export const enrollments = sqliteTable('enrollments', {
  id: text('id').primaryKey(),
  studentId: text('student_id')
    .notNull()
    .references(() => students.id),
  groupId: text('group_id')
    .notNull()
    .references(() => groups.id),
  academicYear: text('academic_year').notNull(), // e.g., "2026-2027"
});
