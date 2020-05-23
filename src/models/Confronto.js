const { Model, DataTypes } = require('sequelize')

class Confronto extends Model {
    static init(sequelize) {
        super.init({
            getdate: DataTypes.INTEGER,
            getmonth: DataTypes.INTEGER,
            gethour: DataTypes.INTEGER,
            date: DataTypes.DATE,
        }, {
            sequelize
        })
        
    }
}

module.exports = Confronto