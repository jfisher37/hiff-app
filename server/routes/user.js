const express = require('express');
const { User } = require('../models');
const { authenticationRequired } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/self/', authenticationRequired, async (req, res) => {
  const userInfo = {
    id: req.user.id,
    username: req.user.username,
    down: req.user.down
  };
  res.send(userInfo);
});