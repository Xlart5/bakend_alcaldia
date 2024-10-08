'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Trayectos, {
        foreignKey: 'id_usuario',
        as: 'trayectos'
      });
    }
  }
  User.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false, // No permitir valores nulos
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // No permitir valores nulos
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};