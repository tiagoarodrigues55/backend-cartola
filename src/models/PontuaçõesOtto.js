const { Model, DataTypes } = require('sequelize')

class PontuaçõesOtto extends Model {
    static init(sequelize) {
        super.init({
            antonio_t: DataTypes.FLOAT,
            antonio_i: DataTypes.FLOAT,
            diego_g: DataTypes.FLOAT,
            otto_l: DataTypes.FLOAT,
            pedro_c: DataTypes.FLOAT,
            tiago_r: DataTypes.FLOAT
        }, {
            sequelize,
            tableName: 'pontuaçõesOttomanos'
        })
        
    }
}
module.exports = PontuaçõesOtto