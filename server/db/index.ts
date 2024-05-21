import mysql from 'mysql2/promise';
import { useRuntimeConfig } from '#imports';

interface Options {
    query: string;
    values?: any[];
}

const config = useRuntimeConfig();

console.log('Database Config:', {
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword ? config.dbPassword : '(no password)',
    database: config.dbDatabase
});

const pool = mysql.createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase
});

export const sql = async ({ query, values }: Options) => {
    try {
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
};
