import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => { 
    res.status(StatusCodes.OK).send('Express + typescript');
});

app.listen(PORT, () => {
    console.log(`ounvindo a porta ${PORT}`);
});