const { Model, DataTypes } = require('sequelize')

class Escalação extends Model {
    static init(sequelize) {
        super.init({
           rodada: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'escalações'
        })
        
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
        this.belongsTo(models.Jogadores, { foreignKey: 'jogador1_id', as: 'jogador1'})
        this.belongsTo(models.Jogadores, { foreignKey: 'jogador2_id', as: 'jogador2'})
        this.belongsTo(models.Jogadores, { foreignKey: 'jogador3_id', as: 'jogador3'})
        this.belongsTo(models.Jogadores, { foreignKey: 'jogador4_id', as: 'jogador4'})
        this.belongsTo(models.Jogadores, { foreignKey: 'jogador5_id', as: 'jogador5'})
    }
}

module.exports = Escalação