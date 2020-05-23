const { Model, DataTypes } = require('sequelize')

class Ottomanos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            img : DataTypes.STRING,
            preço : DataTypes.FLOAT,
            media : DataTypes.FLOAT,
            ultimapontuação : DataTypes.FLOAT,
            pontuação : DataTypes.STRING,
            valorização : DataTypes.FLOAT,

        }, {
            sequelize
        })
        
    }
}

module.exports = Ottomanos