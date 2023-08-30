'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MainPage', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mainImg: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      homeText: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Insert a single row into the table
    await queryInterface.bulkInsert('MainPage', [
      {
        mainImg: 'https://www.workitdaily.com/media-library/employees-pose-for-a-photo-after-taking-part-in-a-workplace-community-service-project.jpg?id=22510728&width=1200&height=600&coordinates=0%2C58%2C0%2C92',
        homeText: "We are on a mission to make community service projects accessible to their visionaries. Philadelphia is brimming with young leaders with ideas for tangible change. We’re here to elevate those concepts into action. We are partnering with area businesses to award funds to students with an appetite and plan for change. If selected, recipients will receive mentorship, project oversight, and recognition for their contributions.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Add a CHECK constraint to ensure only one row exists in the table
    await queryInterface.sequelize.query(`
      ALTER TABLE "MainPage"
      ADD CONSTRAINT "single_MainPage_row"
      CHECK (id = 1)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the CHECK constraint
    await queryInterface.sequelize.query(`
      ALTER TABLE "MainPage"
      DROP CONSTRAINT "single_MainPage_row"
    `);

    // Remove the table
    await queryInterface.dropTable('MainPage');
  }
};

