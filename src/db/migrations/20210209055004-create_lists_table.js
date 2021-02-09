module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lists', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      description: Sequelize.STRING(200),
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface) => {
    queryInterface.dropTable('lists');
  },
};
