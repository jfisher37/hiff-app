const { Token } = require('../models');

/**
 * Validates the token supplied in the header and sets req.user when valid.
 * Token is expected in Authorization header formatted as: Bearer <token>
 * @param { import('express').Request } req Express request object.
 * @param { import('express').Response } res Express response object.
 * @param { import('express').NextFunction } next Express next function.
 * @returns { Promise<void> }
 */
async function authenticationRequired(req, res, next) {
  try {
    const tokenHeader = req.header('authorization');
    if (typeof tokenHeader !== 'string' || !tokenHeader.startsWith('Bearer ')) {
      return res.status(401).send();
    }
    const tokenId = 
    
    // TODO: Double Check substring
    tokenHeader.substring(7);

    // TODO: Create a sequelize query for finding a token with it's connected user
    const tokenRows = {};
    
    // await Token.query()
    //   .where({ 'tokens.id': tokenId })
    //   .withGraphJoined('user');

    // 7 days in milliseconds
    const tokenDuration = 7 * 24 * 60 * 60 * 1000;
    const now = new Date();
    if (!tokenRows.length || tokenRows[0].created_at < now - tokenDuration) {
      return res.status(401).send();
    }

    req.user = tokenRows[0].user;
    return next();
  }
  catch (error) {
    return next(error);
  }
}

module.exports = { authenticationRequired };
