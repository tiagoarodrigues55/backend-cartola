module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('confrontos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
       getdate: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       getmonth: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       gethour: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('confrontos');

  }
};