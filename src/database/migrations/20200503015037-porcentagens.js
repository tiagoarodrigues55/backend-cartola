module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('porcentagens', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        propaganda_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'propagandas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        dados: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
    
      return queryInterface.dropTable('porcentagens');

  }
};
