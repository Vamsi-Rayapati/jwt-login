// src/index.ts
import express, { Request, Response } from 'express';
import logger from './middlewares/logger';
import path from 'path';

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(logger);
let name="Vamsi";
const users = [
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

app.get('/file',(req: Request,res:Response)=> {
  res.sendFile(path.join(__dirname,'../public','sample.html'));
});

app.post('/user', (req: Request, res: Response) => {
 const user = req.body;
  if(!user.email || !user.name) {
    res.status(400).send("Please include email and name");
  } else {
    users.push({
      name: user.name,
      email: user.email
    });
    res.send(201)
  }
  
});

app.put('/user/:id',(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if(id<users.length) {
    users[id]=req.body
    res.send(200);
  } else {
    res.status(404).send('User Not found');
  }

});

app.get('/users', (req: Request, res: Response) => {

  res.send({
    users: users,
    total: users.length
  })
});

app.get('/users/:index', (req: Request, res: Response) => {
  const index: number = parseInt(req.params.index);
  const user = users[index];
  if(user)res.send(user);
  else res.status(404).send('User Not found');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
