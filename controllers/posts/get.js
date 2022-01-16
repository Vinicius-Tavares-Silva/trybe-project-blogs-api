const { BlogPosts, Users } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await BlogPosts.findByPk(
      id,
      { include: {
          model: Users,
          as: 'user',
          attributes: { exclude: ['password'] },
      } },
    );
    if (!object) {
      return res.status(404).send({ message: 'User does not exist' });
    }

    return res.status(200).send(object);
  } catch (err) {
    next(err);
  }
};