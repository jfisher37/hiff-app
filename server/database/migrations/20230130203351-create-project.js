'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      proposal: {
        type: Sequelize.STRING
      },
      solving: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      tags: {
        type: Sequelize.ARRAY
      },
      mainImg: {
        type: Sequelize.STRING
      },
      imgs: {
        type: Sequelize.ARRAY
      },
      approved: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      id: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};