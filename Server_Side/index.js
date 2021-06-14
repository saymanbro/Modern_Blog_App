import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 5000; 
import Router from './router/router.js';
import userRouter from './router/userRouter.js'
import './DB/database.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit:'30mb', extended:false }));
app.use(bodyParser.urlencoded({limit:'30mb', extended:false }));
app.use('/blogs', Router);

app.use('/users', userRouter)


app.listen(PORT, ()=>{
    console.log('listen on ' + PORT);
})