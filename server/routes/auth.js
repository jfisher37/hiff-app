const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { Blob } = require('node:buffer');
const { User, Token } = require('../database/models');

const authRouter = express.Router();

authRouter.post('/login/', async (req, res) => {

  const password = req.body.password;
  // Automatically deny long passwords since they can overload hashing algorithm.
  if (new Blob([password]).size > 4096) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const user = await User.findOne({ where: { email: req.body.email, password: password } });
  if (user === null) {
    console.log('Incorrect email or password');
  } else {
    console.log("FOUND!!!", user)
  }

  const tokenId = uuidv4();

  console.log("TOKEN:", tokenId);

  // await Token.query()
  //   .insert({
  //     id: tokenId,
  //     user_id: user.id
  //   });

  //userInfo without password
  // const userInfo = {
  //   id: user.id,
  //   username: user.username,
  //   down: user.down
  // };

  // res.send({ token: tokenId, user: user });
});

module.exports = { authRouter };