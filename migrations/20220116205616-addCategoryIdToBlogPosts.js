'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'BlogPosts',
      'categoryId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('BlogPosts', 'categoryId')
  }
};
