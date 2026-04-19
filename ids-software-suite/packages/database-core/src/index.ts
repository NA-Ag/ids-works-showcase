import Database from 'better-sqlite3';
import type * as BetterSqlite3 from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import * as validators from './validators';
import * as queries from './queries';
import fs from 'fs';
import path from 'path';

export type SqliteDatabase = BetterSqlite3.Database;

// This function initializes the database connection.
// It creates the DB file in the specified path (which will be dynamic in Electron).
export const initDB = (dbPath: string): {
  db: BetterSQLite3Database<typeof schema>;
  sqlite: BetterSqlite3.Database;
} => {
  // Ensure directory exists
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const sqlite: BetterSqlite3.Database = new Database(dbPath);
  
  // Enforce foreign keys at the SQLite level
  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('foreign_keys = ON');

  const db = drizzle(sqlite, { schema });
  
  return { db, sqlite };
};

export { schema, validators, queries };
