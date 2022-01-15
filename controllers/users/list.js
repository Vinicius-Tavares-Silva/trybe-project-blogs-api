const { Users } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const response = await Users.findAll();
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};