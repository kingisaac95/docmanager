'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Title cannot be empty'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Role.hasMany(models.User, {
          foreignKey: 'RoleId',
        })
      }
    }
  });
  return Role;
};