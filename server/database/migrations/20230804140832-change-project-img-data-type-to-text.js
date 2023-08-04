'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Change the data type of mainImg to TEXT
    await queryInterface.changeColumn('Projects', 'mainImg', {
      type: Sequelize.TEXT,
      allowNull: true, // You can change this to true or false based on your requirement
    });

    // Change the data type of imgs to ARRAY(TEXT)
    await queryInterface.changeColumn('Projects', 'imgs', {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: true, // You can change this to true or false based on your requirement
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes by setting the original data types
    await queryInterface.changeColumn('Projects', 'mainImg', {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn('Projects', 'imgs', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
  }
};
