import bcrypt from 'bcrypt-nodejs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: 'Username cannot be empty'
        }
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          message: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail:{
          message: 'Invalid email address!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 100],
          message: 'Password too short!'
        }
      }
    },
    RoleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          message: 'Role Id must be an integer'
        }
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.Role, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        User.hasMany(models.Document, {
          foreignKey: 'UserId'
        });
      }
    },

    instanceMethods: {
      hashPassword() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
      },

      matchPassword(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },

    hooks: {
      beforeCreate(user) {
        user.hashPassword();
      },

      beforeUpdate(user) {
        if (user._changed.password) {
          user.hashPassword();
        }
      }
    }
  });
  return User;
};