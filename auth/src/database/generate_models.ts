import { SequelizeAuto } from 'sequelize-auto';
import dotenv from 'dotenv';
dotenv.config();


const auto = new SequelizeAuto(process.env.DB_NAME ?? '', process.env.DB_USER ?? '', process.env.DB_PASS ?? '', {
    host: process.env.DB_HOST,
    useDefine: false,
    dialect: 'mysql',
    directory: './src/database/models', // where to write fil
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    lang:'ts'
})
// Generate models
auto.run();
