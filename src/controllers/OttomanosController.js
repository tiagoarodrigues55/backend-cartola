const Ottomanos = require('../models/Ottomanos')

module.exports = {
    async index(req, res) {
        const ottomanos = await Ottomanos.findAll()

        return res.json(ottomanos)
    },

    async store(req, res) {
        const { name, img, media, preço, ultimapontuação, pontuação, valorização } = req.body

        const ottomanos = await Ottomanos.create({ name, img, media, preço, ultimapontuação, pontuação, valorização })

        return res.json(ottomanos)
    },
    async update(req, res){
        const { id } = req.params
        const { media, preço, ultimapontuação, valorização } = req.body
        const ottomanos = Ottomanos.update({ media, preço, ultimapontuação, valorização}, {where: { id: id}})

        return res.json(ottomanos)
    }
}