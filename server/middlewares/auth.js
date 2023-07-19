const { Token, User } = require("../database/models");

const authenticationRequired = async (req, res, next) => {

  const token = req.headers.authorization; // Assuming the token is provided in the "Authorization" header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const foundToken = await Token.findOne({
      where: { id: token },
      include: [{ model: User, as: "User" }], // Include the associated User model based on the foreign key UserId
    });

    if (!foundToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Check if the token has not expired (expiresAt is in the future)
    const now = new Date();
    if (foundToken.expiresAt <= now) {
      return res.status(401).json({ message: "Token has expired" });
    }

    // Token is valid, attach the associated user to the request for further use in the route handlers
    req.user = foundToken.User;

    next();
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authenticationRequired;
