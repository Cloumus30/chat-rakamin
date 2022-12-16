'use strict';

const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
   await queryInterface.bulkInsert('Users',[
      {
        username: "cloudias",
        password: bcrypt.hashSync('passwordCloudias',salt),
        name: "Cloudias"
      },
      {
        username: "imani",
        password: bcrypt.hashSync('passwordImani',salt),
        name: "Imani"
      }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
