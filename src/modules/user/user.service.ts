import { pool } from "../../db";
import type { Iuser } from "./user.interface";
import brypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const createUserIntoDB = async (payload: Iuser) => {

    const {name, email, password, age, role}=payload;
    const hashPassword=await brypt.hash(password, 10);

    const result = await pool.query(`
    INSERT INTO users(name, email, password, age, role) VALUES($1, $2, $3, $4, COALESCE($5, 'user'))
    RETURNING *
    `,[name, email, hashPassword, age, role])

    const jwtPayload={
        name: name.name
    }
    return result.rows[0];
}

export const userService = {
    createUserIntoDB
}