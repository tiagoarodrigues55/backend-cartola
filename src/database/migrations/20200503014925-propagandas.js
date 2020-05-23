module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('propagandas', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        fotoempresa: {
          type: Sequelize.STRING
        },
        nome: {
          type: Sequelize.STRING
        }, 
        foto1:{
          type: Sequelize.STRING
        }, 
        foto2: {
          type: Sequelize.STRING
        },
        width1: {
          type: Sequelize.INTEGER
        },
        height1: {
          type: Sequelize.INTEGER
        }, 
        width2: {
          type: Sequelize.INTEGER
        }, 
        height2: {
          type: Sequelize.INTEGER
        }, 
        txt1: {
          type: Sequelize.STRING
        }, 
        txt2: {
          type: Sequelize.STRING
        },
        
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        porcentagem: {
          type: Sequelize.FLOAT
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('propagandas');

  }
};
