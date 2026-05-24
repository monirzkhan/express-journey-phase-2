import  { Pool } from 'pg'
import { config } from '../config'

export const pool= new Pool({
    connectionString:config.database_URL
})

export const initDB=async()=>{
await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    age INT,
    is_active BOOLEAN DEFAULT true,
    role VARCHAR(20) DEFAULT 'user',

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `)
    console.log('Database connected successfully');
}