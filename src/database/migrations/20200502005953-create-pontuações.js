module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pontuaçõesOttomanos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        antonio_t: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        antonio_i: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        diego_g: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        otto_l: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        pedro_c: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        tiago_r: {
          type: Sequelize.FLOAT,
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
    
      return queryInterface.dropTable('pontuaçõesOttomanos');

  }
};
