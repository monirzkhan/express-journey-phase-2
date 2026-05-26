import type { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser=async(req: Request,res:Response)=>{
    const {email, password}=req.body;

    const result= await authService.loginUserFromDB(req.body)

}

export const authController={
    loginUser,
}