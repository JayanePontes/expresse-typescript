import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => { 
    res.status(StatusCodes.OK).send('Express + typescript');
});

app.listen(PORT, () => {
    console.log(`ounvindo a porta ${PORT}`);
});