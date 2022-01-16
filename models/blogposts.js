const BlogPosts = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPosts',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };

  return BlogPost;
};

module.exports = BlogPosts;
