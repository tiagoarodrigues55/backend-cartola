
const PontuaçõesOtto = require('../models/PontuaçõesOtto')

module.exports = {
    async index(req, res) {
        const pontuaçõesOtto = await PontuaçõesOtto.findAll()

        return res.json(pontuaçõesOtto)
    },

    async store(req, res) {
        const { antonio_t, antonio_i, diego_g, otto_l, pedro_c, tiago_r } = req.body

        const pontuaçõesOtto = await PontuaçõesOtto.create({ antonio_t, antonio_i, diego_g, otto_l, pedro_c, tiago_r })

        return res.json(pontuaçõesOtto)
    }
}