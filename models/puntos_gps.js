'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PuntosGps extends Model {
    static associate(models) {
      // Define association with Trayectos
      PuntosGps.belongsTo(models.Trayectos, {
        foreignKey: 'id_trayectos', // Clave foránea
        as: 'trayecto', // Alias para la asociación
      });
    }
  }
  
  PuntosGps.init({
    id_trayectos: {
      type: DataTypes.INTEGER,
      allowNull: false, // No permitir valores nulos
      references: {
        model: 'Trayectos', // Nombre de la tabla a la que se relaciona
        key: 'id' // Clave primaria de la tabla referenciada
      }
    },
    ubicacion: {
      type: DataTypes.GEOGRAPHY('POINT', 4326), // Tipo Geography para almacenar puntos
      allowNull: false, // No permitir valores nulos
    }
  }, {
    sequelize,
    modelName: 'PuntosGps',
  });
  return PuntosGps;
};
