import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';

let db: Database | null = null;

export const getDatabase = async (): Promise<Database> => {
    if (!db) {
        db = await open({
            filename: './src/parking.sqlite',
            driver: sqlite3.Database,
        });
    }
    return db;
};

export const closeDatabase = async (): Promise<void> => {
    if (db) {
        await db.close();
        db = null;
    }
};