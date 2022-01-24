import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

// import 

import authRouter from './routes/auth-router.js';
import ListRouter from './routes/list-router.js';
import MovieRouter from './routes/movie-router.js';
import UserRouter from './routes/user-router.js';

dotenv.config();
const app = express();

app.use(cors())
// app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/auth', authRouter);
app.use('/api/lists',ListRouter);
app.use('/api/movies',MovieRouter);
app.use("/api/users", UserRouter);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('DB connected');
    app.listen(7000,()=>{
        console.log('server listening on port 7000');
    })


}).catch(err=>{
    console.error(err)
})
