const express = require('express');
const { User } = require('../database/models');
const { authenticationRequired } = require('../middlewares');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userRouter = express.Router();

console.log("AUTH",authenticationRequired);

userRouter.get('/self/', authenticationRequired, async (req, res) => {
res.send(`${req.user.first} is logged in!`)
});

userRouter.post('/signup/', async (req, res) => {
  const first = req.body.first.toLowerCase();
  const last = req.body.last.toLowerCase();
  const email = req.body.email.toLowerCase();
  const { password } = req.body;


  // Make sure password isn't too long
  if (new Blob([password]).size > 4096) {
    return res.status(400).send('password too long');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  //checks to see if username already exists
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      first: first,
      last: last,
      password: hashedPassword,
    }
  });

  if (created) {
    res.send(`${user.first}'s account has been created`);
  } else {
    res.send('An account is already attached to this email address.')
  }
});


module.exports = { userRouter };