import dotenv from 'dotenv';
import Account from "./account";
dotenv.config();

const accountDB = new Account(process.env.DB_HOST??'');
accountDB.init();
accountDB.createTables({force:true});
