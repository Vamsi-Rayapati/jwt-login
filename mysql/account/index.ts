import { Sequelize, SyncOptions } from 'sequelize';
import User from './models/User';

const tableName:string ="db_account";
class Account extends Sequelize {
    
    constructor(host: string) {
        super(tableName,process.env.DB_USER ?? '', process.env.DB_PASS ?? '',{
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