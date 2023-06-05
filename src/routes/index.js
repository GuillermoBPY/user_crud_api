const userRouter = require('./user.router');
const express = require('express');
const router = express.Router();

router.use('/users', userRouter);

module.exports = router;
