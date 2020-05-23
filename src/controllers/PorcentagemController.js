const Porcentagem = require('../models/Porcentagem')
const Propaganda = require('../models/Propaganda')


module.exports = {
    async index(req, res){
        const { propaganda_id } = req.params

        const propaganda = await Propaganda.findByPk(propaganda_id, {
            include: { association: 'porcentagens'}
        })
        return res.json(propaganda.porcentagens)
    },
    async indexAll(req, res){
        const propagandas = await Propaganda.findAll()
        return res.json(propagandas)
    },
    

    async store(req, res){
        const { propaganda_id } = req.params
        const { dados} = req.body

        const propaganda = await Propaganda.findByPk(propaganda_id)

        if(!propaganda){
            return res.status(400).json({error: 'Propaganda not found'})
        }
        const porcentagem = await Porcentagem.create({
            dados,
           
            propaganda_id
        })
        return res.json(porcentagem)
    }
}