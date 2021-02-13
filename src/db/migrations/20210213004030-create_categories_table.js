module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: Sequelize.STRING(200),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('categories');
  },
};
