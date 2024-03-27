import { Sequelize, SyncOptions } from 'sequelize';
import User from './models/User';
import { DB_PASS, DB_USER } from '../config';

const tableName:string ="db_account";
class Account extends Sequelize {
    
    constructor(host: string) {
        super(tableName,DB_USER,DB_PASS,{
            host: host,
            dialect: 'mysql'
        })
    }

    init() {
        User.initModel(this);
    }

    createTables(options: SyncOptions) {
        User.sync(options);
    }
}

export default  Account;