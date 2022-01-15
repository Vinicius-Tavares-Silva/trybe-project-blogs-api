const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategories',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
  );

  PostsCategory.associate = (models) => {
    PostsCategory.hasMany(models.BlogPosts, { as: 'posts', foreignKey: 'postId' });
    PostsCategory.hasMany(models.Categories, { as: 'categories', foreignKey: 'categoryId' });
  };

  return PostsCategory;
};

module.exports = PostsCategories;
