require('dotenv').config();

// express
const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');

// routes

// middleware
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

app.get('/', (req, res) => {
    res.send('locker');
});

app.use(notFound);
app.use(errorHandler);

// start
const port = 5000 || process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};
start();
