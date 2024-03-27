import express, { Request, Response } from 'express';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes';
import Account from 'mysql/account';

// Config ENV
dotenv.config();

// Config Express
const app = express();

// Config Databases
console.log(process.env.DB_HOST);
const accountDB = new Account(process.env.DB_HOST ?? '');
accountDB.authenticate();
accountDB.init();


// middlewares
app.use(express.json());
app.use(logger);


//routes
app.use('/account/api/v1', router);

// error handling 


app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
