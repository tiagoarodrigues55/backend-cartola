const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const OttomanosController = require('./controllers/OttomanosController')
const EscalaçãoController = require('./controllers/EscalaçãoController')
const PontuaçõesOttoController = require('./controllers/PontuaçõesOttoController')
const PropagandaController = require('./controllers/PropagandaController')
const PorcentagemController = require('./controllers/PorcentagemController')
const JogadoresController = require('./controllers/JogadoresController')
const ConfrontoController = require('./controllers/ConfrontoController')


routes.get('/users', UserController.index)
routes.get('/users/:user_id', UserController.indexId)

routes.post('/users', UserController.store)
routes.put('/users/:id/v', UserController.updateV$)
routes.put('/users/:id/p', UserController.updateP)
routes.put('/users/:id', UserController.update)


routes.get('/ottomanos', OttomanosController.index)
routes.post('/ottomanos', OttomanosController.store)
routes.put('/ottomanos/:id', OttomanosController.update)

routes.get('/jogadores', JogadoresController.index)
routes.post('/jogadores', JogadoresController.store)
routes.put('/jogadores/:id', JogadoresController.update)

routes.post('/users/:user_id/escalacao', EscalaçãoController.store)
routes.get('/users/:user_id/escalacao', EscalaçãoController.index)
routes.get('/users/:rodada/escalacaoR', EscalaçãoController.indexrodada)

routes.get('/pontuacoesotto', PontuaçõesOttoController.index)
routes.post('/pontuacoesotto', PontuaçõesOttoController.store)

routes.get('/propagandas', PropagandaController.index)
routes.post('/propagandas', PropagandaController.store)
routes.put('/propagandas/:id', PropagandaController.update)

routes.get('/propagandas/:propaganda_id/porcentagem', PorcentagemController.index)
routes.get('/propagandas/porcentagem', PorcentagemController.indexAll)
routes.post('/propagandas/:propaganda_id/porcentagem', PorcentagemController.store)

routes.get('/confronto', ConfrontoController.index)
routes.post('/confronto', ConfrontoController.store)
routes.put('/confronto/:id', ConfrontoController.update)

routes.get('/', (req, res) => {
    res.json({
        "/users": {
            "get": "mostra os usuarios cadastrados",
            "post": "cria um usuario com os parametros, (name, email, password)",
            "get(/:user_id/escalacao)": "mostra as escalações do usuario selecionado",//add uma coluna 'rodada'
            "post(/:user_id/escalacao)": "add o time do usuario selecionado com os parametros(jogador1, jogador2, jogador3, jogador4, jogador5)"
        },
        "/ottomanos": {
            "get": "mostra os jogadores do ottomanos",
            "post": "cria jogadores para os ottomanos com os parametros (name, img, media, preço, ultimapontuação, pontuação, valorização)",
            "put": "atualiza os jogadores do Ottomanos com os parametros (media, preço, ultimapontuação, valorização)"
        },
        "/pontuacoesotto": {
            "get": "mostra as pontuações dos jogadores do ottomanos",
            "post": "adiciona novas pontuações aos jogadores com os parametros (antonio_t, antonio_i, diego_g, otto_l, pedro_c, tiago_r)"
        },
        "/propagandas": {
            "get": "mostra as informações das propagandas cadastradas",
            "post": "cria uma nova propaganda com os parametros(fotoempresa, nome, foto1, foto2, width1, height1, width2, height2, txt1, txt2)",
            "get(/:propaganda_id/porcentagem)": "mostra os dados adiquiridos com as respostas à propaganda em questão",
            "post(/:propaganda_id/porcentagem)": "adiciona uma resposta à propaganda com o parametro(dados)"
        }
    })
})

module.exports = routes