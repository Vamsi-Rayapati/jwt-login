// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

let name="Vamsi";
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.get('/user', (req: Request, res: Response) => {
  res.send(name)
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
