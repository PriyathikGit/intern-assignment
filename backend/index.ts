import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import main from './main';
import path from 'path';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to the alloan.ai");
// });
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.use('/api', main);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
