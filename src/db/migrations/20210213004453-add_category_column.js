module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('items', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'RESTRICT',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('items', 'category_id');
  },
};
