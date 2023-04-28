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
  console.log(user.first); // 'sdepold'
  console.log(user.password); // This may or may not be 'Technical Lead JavaScript'
  console.log(created); // The boolean indicating whether this instance was just created
  if (created) {
    console.log(user.last); 
    res.send(user);
  }



  // // TODO: fix flow so we don't need to set empty password (currently a hack)
  // let newUser = User.fromJson({ id: '', username, password: '' });
  // newUser.setPassword(password);
  // newUser.setId();
  // newUser = await User.query()
  //   .insert(newUser)
  //   .returning('*');

  // // TODO: don't send hashed password back
  // res.send(newUser.toJSON());
});


module.exports = { userRouter };