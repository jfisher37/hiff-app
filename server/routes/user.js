const express = require('express');
const { User } = require('../database/models');
const { authenticationRequired } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/self/', authenticationRequired, async (req, res) => {
  const userInfo = {
    id: req.user.id,
    username: req.user.username,
  };
  res.send(userInfo);
});

userRouter.post('/signup/', async (req, res) => {
  const first = req.body.first.toLowerCase();
  const last = req.body.last.toLowerCase();
  const email = req.body.email.toLowerCase();
  const school = req.body.school.toLowerCase();
  const { password } = req.body;

  // Make sure password isn't too long
  if (new Blob([password]).size > 4096) {
    return res.status(400).send('password too long');
  }

  //checks to see if username already exists
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      first: first,
      last: last,
      password: password,
      school: school,
    }
  });

  if (created) {
    res.send(`${user.first}'s account has been created`);
  }
});


module.exports = { userRouter };