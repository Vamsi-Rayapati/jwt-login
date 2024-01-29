// src/index.ts
import express, { Request, Response } from 'express';
import logger from './middlewares/logger';

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(logger);
let name="Vamsi";
let users = [
  {
    name:'Vamsi',
    email:'vamsi@gmail.com'
  },
  {
    name:'Sai',
    email:'sai@gmail.com'
  },
  {
    name:'Prasanth',
    email:'prasanth@gmail.com'
  }
]
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.post('/user', (req: Request, res: Response) => {
  console.log('VRRRRR', req.body);
  const user = req.body;
  users.push({
    name: user.name,
    email: user.email
  });
  res.send(201)
});

app.get('/users', (req: Request, res: Response) => {

  res.send({
    users: users,
    total: users.length
  })
});

app.get('/users/:index', (req: Request, res: Response) => {
  const index: number = Number(req.params.index);
  res.send(users[index])
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
