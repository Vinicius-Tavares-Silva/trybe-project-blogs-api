const loginService = require('../../services/login');

const login = async (req, res, next) => {
  try {
    const { email = null, password = null } = req.body;
    const result = await loginService(email, password);
    if (result.status) {
      return res.status(result.status).json({ token: result.message });
    }
    return res.status(400).send({ message: result.message });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };