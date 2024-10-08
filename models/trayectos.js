'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trayectos extends Model {
    static associate(models) {
      // Relación con el modelo User
      Trayectos.belongsTo(models.User, {
        foreignKey: 'id_usuario',  // Columna que referencia la clave foránea
        as: 'usuario',  // Nombre de la relación (opcional)
      });
    }
  }

  Trayectos.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { 
        model: 'Users', // Nombre de la tabla a la que hace referencia
        key: 'id'  // Llave primaria de la tabla Users
      }
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true,  // Puede ser nulo si el trayecto aún no ha terminado
    },
    medio_transporte: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_linea: {
      type: DataTypes.STRING,
      allowNull: true,  // Puede ser nulo si no hay número de línea (ej. caminar, bicicleta)
    }
  }, {
    sequelize,
    modelName: 'Trayectos',
  });

  return Trayectos;
};
