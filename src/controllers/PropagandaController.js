const Propaganda = require('../models/Propaganda')

module.exports = {
    async index(req, res) {
        const propaganda = await Propaganda.findAll()

        return res.json(propaganda)
    },

    async store(req, res) {
        const { fotoempresa, nome, foto1, foto2, width1, height1, width2, height2, txt1, txt2, porcentagem } = req.body

        const propaganda = await Propaganda.create({fotoempresa, nome, foto1, foto2, width1, height1, width2, height2, txt1, txt2, porcentagem})

        return res.json(propaganda)
    },
    async update(req, res){
        const { id } = req.params
        const { porcentagem } = req.body
        const propaganda = Propaganda.update({ porcentagem }, {where: { id: id}})

        return res.json(propaganda)
    }
}