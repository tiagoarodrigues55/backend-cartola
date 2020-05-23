const Confronto = require('../models/Confronto')

module.exports = {
    async index(req, res) {
        const confronto = await Confronto.findAll()

        return res.json(confronto)
    },

    async store(req, res) {
        const { getdate, getmonth, gethour } = req.body

        const confronto = await Confronto.create({ getdate, getmonth, gethour })

        return res.json(confronto)
    },
    async update(req, res){
        const { id } = req.params
        const { getdate, getmonth, gethour } = req.body
        const confronto = Confronto.update({ getdate, getmonth, gethour}, {where: { id: id}})

        return res.json(confronto)
    }
}