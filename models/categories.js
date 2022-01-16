const Categories = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
  );

  Category.associate = (_models) => {
    // Category.hasMany(models.PostsCategories, { as: 'posts', foreignKey: 'categoryId' });
  };

  return Category;
};

module.exports = Categories;
