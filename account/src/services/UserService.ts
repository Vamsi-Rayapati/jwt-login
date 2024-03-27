import {User} from 'mysql/account/models';

async function register(name: string, email: string,password: string) {
    try{
        const user1 = await User.create({name: name, email: email});
        return user1;
    } catch(err) {
        throw Error('Failed to create user'+err);
    }
    
}

export default {
    register
}