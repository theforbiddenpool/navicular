module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      quantity: Sequelize.FLOAT,
      unit: Sequelize.STRING(30),
      notes: Sequelize.STRING(255),
      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'lists',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('items');
  },
};
