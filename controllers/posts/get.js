const { BlogPosts, Users, Categories } = require('../../models');

const fields = ['password', 'createdAt', 'updatedAt'];
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const object = await BlogPosts.findByPk(
      id,
      {
        include: [
        { model: Users, as: 'user', attributes: { exclude: fields } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
      },
    );
    if (!object) {
      return res.status(404).send({ message: 'Post does not exist' });
    }
    return res.status(200).send(object);
  } catch (err) {
    next(err);
  }
};