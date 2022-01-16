const { Categories } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const response = await Categories.findAll();
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};