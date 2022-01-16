const { Categories } = require('../../models');
const categoriesService = require('../../services/categories');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const payloadValidate = categoriesService(payload);
  try {
    if (payloadValidate) {
      return res.status(400).send(payloadValidate);
    }
    const categories = await Categories.create(payload);
    return res.status(201).send(categories);
  } catch (err) {
    next(err);
  }
};