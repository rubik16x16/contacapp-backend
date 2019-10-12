'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contacto = sequelize.define('Contacto', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {});
  Contacto.associate = function(models) {
    // associations can be defined here
  };
  return Contacto;
};