export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Documents', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    UserId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false
    },
    RoleId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    access: {
      defaultValue: 'public',
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Documents');
  }
};
