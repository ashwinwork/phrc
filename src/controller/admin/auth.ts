import { Request, Response } from "express";
import {  loginService } from "../../service/admin/auth";


export async function getLoginPage(req: Request, res: Response) {
    return res.render('login')
}

export async function loginController(req: Request, res: Response) {
    const {username, password} = req.body;
    console.log(req.body);
    
    const loginSucess = loginService(username, password);        
    res.redirect('/');
}

export async function getDashboard(req: Request, res: Response){
    return res.render('dashboard')
}