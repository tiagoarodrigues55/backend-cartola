module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('jogadores', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING,
          allowNull: false
        },
        preço : {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        media : {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        ultimapontuação : {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        
        valorização : {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        jogos : {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        time: {
          type: Sequelize.STRING,
          allowNull: false
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
    
      return queryInterface.dropTable('jogadores');

  }
};
