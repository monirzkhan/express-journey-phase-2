import type { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    const {name, email, password, role, age}=req.body;
    try {
        const result = await userService.createUserIntoDB(req.body)
        console.log(result);
        res.status(200).json({
            success: true,
            message: "User Created Successfully",
            date: result
        })
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message:error.message,
            date: {}
        })
    }
}

export const userController = {
    createUser,
}