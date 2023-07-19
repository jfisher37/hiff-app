"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
        id: '139dcc0f-12c4-42ae-b01f-083685610ff1',
        first: 'Phil',
        last: 'Helper',
        email: 'phelper@email.com',
        password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '17d2f056-e4c4-48dc-abe5-eac25038f0dc',
        first: 'Philip',
        last: 'Moorehelpful',
        email: 'pmoorehelp@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e0c76209-86a4-468a-a8ab-2afcb7b28411',
        first: 'Katherine',
        last: 'Tidyman',
        email: 'betidy@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19a89491-dc4c-467e-933c-303c2197d8c1',
        first: 'Mildred',
        last: 'Cooke',
        email: 'Cookiemill@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Users', null, {});
 
  },
};
