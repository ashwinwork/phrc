import { Request, Response } from "express";

export async function getGeneralInfoPage(req: Request, res: Response) {
    res.render('login')
}

