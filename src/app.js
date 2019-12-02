require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./middleware/error-handler');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');
const mainRouter = require('./main/main-router');
const commentsRouter = require ('./comments/comments-router');

const app = express();
const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';
app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter); //login
app.use('/api/user', userRouter); //registration
app.use('/api/main', mainRouter); //main
app.use('/api/comments', commentsRouter); //comments

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
});

app.use(errorHandler);

module.exports = app;

//testing for preet

