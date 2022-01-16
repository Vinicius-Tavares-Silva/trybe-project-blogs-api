const { BlogPosts } = require('../../models');
const authService = require('../../services/auth');
const blogPostsService = require('../../services/blogposts');

module.exports = async (req, res, next) => {
  const payload = req.body;
  const { displayName, email, password } = payload;
  const payloadValidate = await blogPostsService(displayName, email, password);
  try {
    if (payloadValidate) {
      const { status, message } = payloadValidate;
      return res.status(status).send({ message });
    }
    const { password: _password, ...userWithoutPassword } = await BlogPosts.create(payload);
    const token = authService.genToken(userWithoutPassword);
    return res.status(201).send({ token });
  } catch (err) {
    next(err);
  }
};