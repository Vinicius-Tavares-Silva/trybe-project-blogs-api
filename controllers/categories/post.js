const { Users } = require('../../models');
const authService = require('../../services/auth');

module.exports = async (req, res, next) => {
  const payload = req.body;

  try {
    const { password: _password, ...userWithoutPassword } = await Users.create(payload);
    const token = authService.genToken(userWithoutPassword);
    return res.status(201).send({ token });
  } catch (err) {
    next(err);
  }
};