import { Request, Response } from "express";
import AuthService from "../services/AuthService";
async function logIn(req: Request, res: Response) {



}

async function signUp(req: Request, res: Response) {
    console.log('Data', req.body);
    // AuthService.signUp({
    //     email: 
    //     password: 
    // });
    res.sendStatus(200);

}

export default {logIn, signUp};