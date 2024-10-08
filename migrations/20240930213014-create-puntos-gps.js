'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('PuntosGps', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_trayectos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Trayectos', // Nombre de la tabla a la que se relaciona
          key: 'id' // Clave primaria de la tabla referenciada
        },
      },
      ubicacion: {
        type: Sequelize.GEOGRAPHY('POINT', 4326), // Tipo Geography para almacenar puntos
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PuntosGps');
  }
};
