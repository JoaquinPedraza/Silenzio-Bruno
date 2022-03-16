const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/userModel');
const userRouter = require('./routers/userRoutes')(User);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/APIweb');

app.use('/api', userRouter);
app.listen(8080, ()=> {
    console.log('Server iniciado...')
});