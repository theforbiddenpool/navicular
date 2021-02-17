module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('lists', 'createdAt', Sequelize.DATE, { transaction });
      await queryInterface.addColumn('lists', 'updatedAt', Sequelize.DATE, { transaction });
      await queryInterface.addColumn('items', 'createdAt', Sequelize.DATE, { transaction });
      await queryInterface.addColumn('items', 'updatedAt', Sequelize.DATE, { transaction });
      await queryInterface.addColumn('categories', 'createdAt', Sequelize.DATE, { transaction });
      await queryInterface.addColumn('categories', 'updatedAt', Sequelize.DATE, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('lists', 'createdAt', { transaction });
      await queryInterface.removeColumn('lists', 'updatedAt', { transaction });
      await queryInterface.removeColumn('items', 'createdAt', { transaction });
      await queryInterface.removeColumn('items', 'updatedAt', { transaction });
      await queryInterface.removeColumn('categories', 'createdAt', { transaction });
      await queryInterface.removeColumn('categories', 'updatedAt', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
