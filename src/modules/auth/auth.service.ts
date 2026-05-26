import { pool } from "../../db";
import type { Iuser } from "../user/user.interface";

const loginUserFromDB = async (payload: Iuser) => {

    const {email, password}=payload;
    const result = await pool.query(`
    `)
}

export const authService={
    loginUserFromDB
}