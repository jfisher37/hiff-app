const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { Blob } = require("node:buffer");
const { User, Token } = require("../database/models");
const bcrypt = require("bcrypt");

const authRouter = express.Router();

authRouter.post("/login/", async (req, res) => {
  const password = req.body.password;
  // Automatically deny long passwords since they can overload hashing algorithm.
  if (new Blob([password]).size > 4096) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      await Token.destroy({ where: { UserId: user.id } });
      
      const tokenId = uuidv4();
      const UserId = user.id; // userId is now defined and ready to use

      const token = await Token.create({
        id: tokenId,
        UserId,
        expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000),
      });

      res.json(token.id);
      return result;
    } else {
      res.send("Incorrect email or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// authRouter.post("/login/", async (req, res) => {
//   const password = req.body.password;
//   // Automatically deny long passwords since they can overload hashing algorithm.
//   if (new Blob([password]).size > 4096) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }

//   const user = await User.findOne({ where: { email: req.body.email } });

//   if (user === null) {
//     res.send("Incorrect email or password");
//   }

//   const userId = user.id;

//   const result = await bcrypt.compare(password, user.password, function (err, result) {
//     console.log("PASSWORD", password);
//     console.log("USERPASSWORD", user.password);
//     if (result) {
//       res.send(`Welcome, ${user.first}`);
//       const tokenId = uuidv4();

//   console.log("TOKEN:", tokenId);

//   console.log("USERID:", userId);

//   const token =  Token.create({
//     id: tokenId,
//     userId,
//     expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000),
//   });
//       return result;
//     } else {
//       res.send("Incorrect email or password");
//     }
//   });

  // const tokenId = uuidv4();

  // console.log("TOKEN:", tokenId);

  // console.log("USERID:", user.id);

  // const token = await Token.create({
  //   id: tokenId,
  //   userId: await user.id,
  //   expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000),
  // });

  //userInfo without password
  // const userInfo = {
  //   id: user.id,
  //   username: user.username,
  //   down: user.down
  // };

  // res.send({ token: tokenId, user: user });
// });

module.exports = { authRouter };
