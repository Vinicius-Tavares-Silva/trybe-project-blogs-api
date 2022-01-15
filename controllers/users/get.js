const { Users } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await Users.findByPk(id);
    if (!object) {
      return res.status(401).send({ message: 'User does not exist' });
    }

    return res.status(200).send(object);
  } catch (err) {
    next(err);
  }
};