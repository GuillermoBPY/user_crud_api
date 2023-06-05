const {
    getAllUsers,
    createUser,
    getUserByPk,
    updateUser,
    deleteUser,
} = require('../controllers/users.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUserByPk).put(updateUser).delete(deleteUser);

module.exports = userRouter;
