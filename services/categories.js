module.exports = (payload) => {
  if (!payload.name) {
    return ({ message: '"name" is required' });
  }
  return null;
};