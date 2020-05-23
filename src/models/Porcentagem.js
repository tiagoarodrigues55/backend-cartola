const { Model, DataTypes } = require('sequelize')

class Porcentagem extends Model {
    static init(sequelize) {
        super.init({
            dados: DataTypes.INTEGER,
            
        }, {
            sequelize,
            tableName: 'porcentagens'
        
        })
        
    }
    static associate(models) {
        this.belongsTo(models.Propaganda, { foreignKey: 'propaganda_id', as: 'propagandas'})
    }
}

module.exports = Porcentagem