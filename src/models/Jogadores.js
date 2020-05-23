const { Model, DataTypes } = require('sequelize')

class Jogadores extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            img : DataTypes.STRING,
            preço : DataTypes.FLOAT,
            media : DataTypes.FLOAT,
            ultimapontuação : DataTypes.FLOAT,
            valorização : DataTypes.FLOAT,
            jogos: DataTypes.INTEGER,
            time: DataTypes.STRING
        }, {
            sequelize
        })
        
    }
    static associate(models){
        this.hasMany(models.Escalação, { foreignKey: 'jogador1_id', as: 'escalação'}),
        this.hasMany(models.Escalação, { foreignKey: 'jogador2_id', as: 'escalação1'}),
        this.hasMany(models.Escalação, { foreignKey: 'jogador3_id', as: 'escalação2'}),
        this.hasMany(models.Escalação, { foreignKey: 'jogador4_id', as: 'escalação3'}),
        this.hasMany(models.Escalação, { foreignKey: 'jogador5_id', as: 'escalação4'})
    }
}

module.exports = Jogadores