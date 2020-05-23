module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('escalações', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }, 
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jogador1_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'jogadores', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jogador2_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'jogadores', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jogador3_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'jogadores', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jogador4_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'jogadores', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        jogador5_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'jogadores', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        rodada: {
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
    
      return queryInterface.dropTable('escalações');

  }
};