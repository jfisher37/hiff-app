const express = require('express');
const crypto = require('crypto');
const { Blob } = require('node:buffer');
const { User, Token } = require('../models');

const authRouter = express.Router();

authRouter.post('/login/', async (req, res) => {

  const password = req.body.password;
  // Automatically deny long passwords since they can overload hashing algorithm.
  if (new Blob([password]).size > 4096) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const userResult = await User.query().where({
    username: req.body.username.toLowerCase(),
  });

  if (!userResult.length || !userResult[0].validatePassword(password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const user = userResult[0];
  const tokenId = crypto.randomUUID();
  await Token.query()
    .insert({
      id: tokenId,
      user_id: user.id
    });

  //userInfo without password
  const userInfo = {
    id: user.id,
    username: user.username,
    down: user.down
  };

  res.send({ token: tokenId, user: userInfo });
});

module.exports = { authRouter };