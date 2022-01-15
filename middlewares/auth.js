const authService = require('../services/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: 'Token not found' });
    }

    const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(401).send({ message: 'Expired or invalid token' });
    }
    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};