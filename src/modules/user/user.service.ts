import { pool } from "../../db";
import type { Iuser } from "./user.interface";

const createUserIntoDB = async (payload: Iuser) => {

    const {name, email, password, age, role}=payload;
    const result = await pool.query(`
    INSERT INTO users(name, email, password, age, role) VALUES($1, $2, $3, $4, COALESCE($5, 'user'))
    RETURNING *
    `,[name, email, password, age, role])
}

export const userService = {
    createUserIntoDB
}