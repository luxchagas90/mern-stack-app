import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { router as workoutRoutes } from './routes/workouts.js';

// evironment variables
dotenv.config();
const port = process.env.PORT;
const database = process.env.DB_URI;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workouts/', workoutRoutes);

// connect to database
mongoose.connect(database)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log('connected to database and listening on port', port);
        })
    })
    .catch((error) => {
        console.log(error);
    })

