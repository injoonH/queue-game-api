import express from 'express';
import { createServer } from 'http';
import { config } from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

config();

const app = express();
const server = createServer(app);
const port = process.env.PORT ?? 80;

app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ title: 'hello world' });
});

server.listen(port, () => {
    console.log(`Server is listening @ ${process.env.HOST}:${port}`);
});
