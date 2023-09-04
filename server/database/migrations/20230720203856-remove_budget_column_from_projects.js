'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Remove the "budget" column from the "Projects" table
     */
    await queryInterface.removeColumn('Projects', 'budget');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Re-add the "budget" column to the "Projects" table
     */
    await queryInterface.addColumn('Projects', 'budget', {
      type: Sequelize.INTEGER, // Revert back to the original data type of the "budget" column
      allowNull: false, // Revert back to the original allowNull value of the "budget" column
    });
  }
};
