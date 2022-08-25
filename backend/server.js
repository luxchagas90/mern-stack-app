import express, { json } from 'express';
import dotenv from 'dotenv';

import { router as workoutRoutes } from './routes/workouts.js';

// evironment variables
dotenv.config();
const port = process.env.PORT;

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

// listen for requests
app.listen(port, () => {
    console.log('listening on port', port);
})