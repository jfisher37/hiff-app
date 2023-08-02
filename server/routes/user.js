const express = require('express');
const { User } = require('../database/models');
const { authenticationRequired } = require('../middlewares');
const { capitalize }  = require('../utils/casing');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userRouter = express.Router();

//Get own info:
userRouter.get('/self/', authenticationRequired, async (req, res) => {
const userInfo = {
  id: req.user.id,
  first: capitalize(req.user.first),
  last: capitalize(req.user.last),
  email: req.user.email,
}

  res.send(userInfo);
});

//Sign up route:
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

  //checks to see if acct for email already exists
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

//Edit password: 
userRouter.put('/edit-password/', authenticationRequired, async (req, res) => {
  try {
    const { id, currentPassword, newPassword } = req.body;

    // Find the user by id
    const user = await User.findOne({ where: { id } });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the current password provided in the request with the user's stored password
    const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Incorrect current password' });
    }

    // Hash the new password and update the user's password in the database
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = { userRouter };