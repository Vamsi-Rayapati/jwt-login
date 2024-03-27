import express, { Request, Response } from 'express';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes';
import sequelize from './database';

// Config ENV
dotenv.config();

// Config Express
const app = express();

// Config Database
sequelize.authenticate();

// middlewares
app.use(express.json());
app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Welcome');
});

//routes
app.use('/account/api/v1', router);

// error handling 


app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
