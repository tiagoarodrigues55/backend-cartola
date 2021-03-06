const Escalação = require('../models/Escalação')
const User = require('../models/User')



module.exports = {
    async index(req, res){
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'escalação'}
        })
        return res.json(user)
    },
    async indexrodada(req, res){
        const { rodada } = req.params
        var escalaçoes = []
        const escalação = await Escalação.findAll()
        for (i of escalação){
            if (i.rodada == rodada){
                escalaçoes.push(i)
            }
        }
        return res.json(escalaçoes)
    },
    async update(req, res){
        const { id, rodada } = req.params
        const {jogador1_id, jogador2_id, jogador3_id, jogador4_id, jogador5_id} = req.body
        const user = User.update({jogador1_id, jogador2_id, jogador3_id, jogador4_id, jogador5_id }, {where: { id: id, rodada: rodada}})
        return res.json(user)
    },

    async store(req, res){
        const { user_id } = req.params
        const {jogador1_id, jogador2_id, jogador3_id, jogador4_id, jogador5_id , rodada } = req.body
        
        const user = await User.findByPk(user_id)
       
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }
        const escalação = await Escalação.create({
            jogador1_id,
            jogador2_id,
            jogador3_id,
            jogador4_id,
            jogador5_id,
            rodada,
            user_id
        })
        console.log(escalação)
        return res.json(escalação)
    },
    async delete(req, res){
        const {id} = req.params
        Escalação.destroy({
            where: {
                id
              }
        })
    }

}