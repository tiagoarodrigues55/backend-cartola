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
    }
}