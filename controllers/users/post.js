const { Users } = require('../../models');
const authService = require('../../services/auth');
const usersService = require('../../services/users');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const { displayName, email, password } = payload;
  const payloadValidate = await usersService(displayName, email, password);
  try {
    if (payloadValidate) {
      const { status, message } = payloadValidate;
      return res.status(status).send({ message });
    }
    const { password: _password, ...userWithoutPassword } = await Users.create(payload);
    const token = authService.genToken(userWithoutPassword);
    return res.status(201).send({ token });
  } catch (err) {
    next(err);
  }
};