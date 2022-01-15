const Users = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      displayName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
  );
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { as: 'posts', foreignKey: 'userId' });
  };
  return User;
};

module.exports = Users;
