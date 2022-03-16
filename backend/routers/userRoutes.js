const express = require('express');
const userController = require('../controllers/userController');

module.exports = (User) => {
    const userRouter = express.Router();
    const {getUsers} = userController(User);

    userRouter
    .route('/users')
    .get(getUsers);

    return userRouter;
}