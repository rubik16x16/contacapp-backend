'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let contactos = [];

    for(let i =0; i< 10; i++){

      contactos.push({
        nombre: 'Contacto ' + i,
        email: `contacto${i}@gmail.com`,
        telefono: '1234567',
        direccion: 'Direccion contacto ' + i
      });
    }//end for

    return queryInterface.bulkInsert('Contactos', contactos, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Contactos', null, {})
  }
};
