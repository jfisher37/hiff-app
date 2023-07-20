'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proposal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      solving: {
        type: Sequelize.STRING,
        allowNull: false,
      },
 
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      mainImg: {
        type: Sequelize.STRING,
      },
      imgs: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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