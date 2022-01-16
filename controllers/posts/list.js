const { BlogPosts, Users, Categories } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const response = await BlogPosts.findAll({
      include: [{
        model: Users,
        as: 'user',
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      },
      {
        model: Categories,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    return res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};