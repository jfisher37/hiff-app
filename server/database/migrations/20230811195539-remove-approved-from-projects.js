'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Projects', 'approved');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Projects', 'approved', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });
  }
};
