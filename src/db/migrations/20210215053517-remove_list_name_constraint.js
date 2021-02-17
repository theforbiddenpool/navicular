module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeConstraint('lists', 'name');
  },

  down: async (queryInterface) => {
    await queryInterface.addConstraint('lists', {
      type: 'UNIQUE',
      fields: ['name'],
    });
  },
};
