const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            vivacoins: DataTypes.FLOAT,
            nometime: DataTypes.STRING,
            pontos: DataTypes.FLOAT,
            ultimapontuação: DataTypes.FLOAT,
        }, {
            sequelize
        })
        
    }
    static associate(models) {
        this.hasMany(models.Escalação, { foreignKey: 'user_id', as: 'escalação'})
    }
}

module.exports = User