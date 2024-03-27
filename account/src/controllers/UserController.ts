import { Request, Response } from "express";
import UserService from "../services/UserService";
async function register(req: Request, res: Response) {
    const {body} = req;
    const email=body.email;
    const userName= body.user_name;
    const password = body.password;
    try{
        const user= await UserService.register(userName,email,password);
        console.log(user.user_id);
        res.send({user_id: user});
    } catch(err) {
        console.log('Failed to register',err);
        res.send({'reason':"Failed to create"})
    }
    
}

export default {
    register
}