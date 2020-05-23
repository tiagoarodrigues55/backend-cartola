const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Ottomanos = require('../models/Ottomanos')
const Escalação = require('../models/Escalação')
const PontuaçõesOtto = require('../models/PontuaçõesOtto')
const Propaganda = require('../models/Propaganda')
const Porcentagem = require('../models/Porcentagem')
const Jogadores = require('../models/Jogadores')
const Confronto = require('../models/Confronto')


const connection = new Sequelize(dbConfig)

User.init(connection)
Ottomanos.init(connection)
Escalação.init(connection)
PontuaçõesOtto.init(connection)
Propaganda.init(connection)
Porcentagem.init(connection)
Jogadores.init(connection)
Confronto.init(connection)

Escalação.associate(connection.models)
User.associate(connection.models)
Jogadores.associate(connection.models)

Porcentagem.associate(connection.models)
Propaganda.associate(connection.models)


module.exports = connection