'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Title cannot be empty!'
        }
      }
    },
    content: { 
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Content cannot be empty!'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          message: 'User Id must be an integer!'
        }
      }
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          message: 'Role Id must be an integer!'
        }
      }
    },
    access: {
      defaultValue: 'public',
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: (models) => {
        Document.belongsTo(models.User, {
          foreignKey: 'UserId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Document;
};