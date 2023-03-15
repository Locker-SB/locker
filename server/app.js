require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();

// other packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// database
const connectDB = require('./db/connect');

// routes
const authRouter = require('./routes/authRoutes');

// middleware
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

app.use(
    cors({
        origin: '*',
    })
);
app.use(morgan('tiny'));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('locker');
});
app.use('/api/v1/auth', authRouter);
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
