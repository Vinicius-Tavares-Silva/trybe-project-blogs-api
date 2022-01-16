const { Users } = require('../models');

const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

const validateEmail = (email) => {
  if (!email) {
    return ({ status: 400, message: '"email" is required' });
  }
  if (!emailRegex.test(email)) {
    return ({ status: 400, message: '"email" must be a valid email' });
  }
};

const validatePassword = (password) => {
  if (!password) {
    return ({ status: 400, message: '"password" is required' });
  }
  if (password.length !== 6) {
    return ({ status: 400, message: '"password" length must be 6 characters long' });
  }
  return null;
};

module.exports = async (displayName, email, password) => {
  if (validateEmail(email)) {
    return validateEmail(email);
  }
  if (validatePassword(password)) {
    return validatePassword(password);
  }
  if (displayName.length < 8) {
    return ({
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  const user = await Users.findOne({ where: { email } });
  if (user) {
    return ({ status: 409, message: 'User already registered' });
  }

  return null;
};