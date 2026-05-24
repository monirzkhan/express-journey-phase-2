import type { Request, Response } from "express";

const cretaeUser = async (req: Request, res: Response) => {
    console.log(req);
}

export const userController={
    cretaeUser,
}