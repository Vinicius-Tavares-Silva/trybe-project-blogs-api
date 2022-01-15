const { Users } = require('../models');
const authService = require('./auth');

const validateEmail = (email) => {
  if (email === '') {
    return ({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return ({ message: '"email" is required' });
  }
  return null;
};

const validatePassword = (password) => {
  if (password === '') {
    return ({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return ({ message: '"password" is required' });
  }
  return null;
};

module.exports = async (email, password) => {
  if (validateEmail(email)) {
    return validateEmail(email);
  }
  if (validatePassword(password)) {
    return validatePassword(password);
  }
  const user = await Users.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return ({ message: 'Invalid fields' });
  }
  const { password: _password, ...userWithoutPassword } = user;
  const token = authService.genToken(userWithoutPassword);
  return ({ status: 200, message: token });
};