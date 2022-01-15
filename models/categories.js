const Categories = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
  );

  Category.associate = (_models) => {
    
  };

  return Category;
};

module.exports = Categories;
