import { Request, Response } from "express";
import {User} from 'mysql/models/account';
async function register(name: string, email: string,password: string) {
    try{
        const user1 = await User.create({name: name, email: email, password: password});
        return user1;
    } catch(err) {
        throw Error('Failed to create user');
    }
    
}

export default {
    register
}