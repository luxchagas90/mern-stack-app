import express, { json } from 'express';
import dotenv from 'dotenv';

// evironment variables
dotenv.config();
const port = process.env.PORT;

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({ mssg: "Welcome to the app" })
})

// listen for requests
app.listen(port, () => {
    console.log('listening on port', port);
})