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
  balance: integer('balance').notNull().default(0), // Balance in cents to avoid floating point issues (e.g. 50000 = $500.00)
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

// ==========================================
// Finance Tracker Tables
// ==========================================

export const billingInfo = sqliteTable('billing_info', {
  id: text('id').primaryKey(),
  tutorId: text('tutor_id')
    .notNull()
    .references(() => tutors.id),
  rfc: text('rfc').notNull(),
  legalName: text('legal_name').notNull(),
  cfdiUse: text('cfdi_use').notNull(), // e.g., 'D10'
});

export const payments = sqliteTable('payments', {
  id: text('id').primaryKey(),
  studentId: text('student_id')
    .notNull()
    .references(() => students.id),
  concept: text('concept').notNull(), // e.g., 'Colegiatura', 'Inscripción'
  month: text('month'), // e.g., 'Septiembre'
  amount: integer('amount').notNull(), // Amount in cents
  paymentDate: text('payment_date'), // ISO string or unix timestamp
  paymentMethod: text('payment_method'), // e.g., 'Transferencia (SPEI)', 'Efectivo'
  status: text('status').notNull().default('Pendiente'), // 'Pagado', 'Pendiente', 'Vencido'
  folio: text('folio'), // e.g., 'REC-2026-0001'
});

// ==========================================
// Discipline Tracker Tables
// ==========================================

export const disciplineRecords = sqliteTable('discipline_records', {
  id: text('id').primaryKey(),
  studentId: text('student_id')
    .notNull()
    .references(() => students.id),
  type: text('type').notNull(), // 'retardo', 'uniforme', 'reporte'
  date: text('date').notNull(), // ISO string or unix timestamp
  reason: text('reason'), // detailed description
  severity: text('severity').default('leve'), // 'leve', 'moderado', 'severo'
});


export const posCategories = sqliteTable('pos_categories', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  color: text('color').notNull(),
});

export const posProducts = sqliteTable('pos_products', {
  id: text('id').primaryKey(),
  categoryId: text('category_id')
    .notNull()
    .references(() => posCategories.id),
  name: text('name').notNull(),
  price: integer('price').notNull(), // Price in cents
  icon: text('icon').notNull(),
});

export const posTickets = sqliteTable('pos_tickets', {
  id: text('id').primaryKey(),
  date: text('date').notNull(), // ISO string or unix timestamp
  total: integer('total').notNull(), // Total in cents
  paymentMethod: text('payment_method').notNull(), // 'cash' | 'student_balance'
  studentId: text('student_id').references(() => students.id), // Optional, only if paid with balance
});

export const posTicketItems = sqliteTable('pos_ticket_items', {
  id: text('id').primaryKey(),
  ticketId: text('ticket_id')
    .notNull()
    .references(() => posTickets.id),
  productId: text('product_id')
    .notNull()
    .references(() => posProducts.id),
  quantity: integer('quantity').notNull(),
  price: integer('price').notNull(), // Price per item in cents at time of sale
});

