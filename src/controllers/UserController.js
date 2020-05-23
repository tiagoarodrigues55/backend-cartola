const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async indexId(req, res){
        const { user_id } = req.params

        const user = await User.findByPk(user_id)
        return res.json(user)
    },

    async store(req, res) {
        const { name, email, password, vivacoins, nometime, pontos, ultimapontuação } = req.body

        const user = await User.create({ name, email, password, vivacoins, nometime, pontos, ultimapontuação })

        return res.json(user)
    },
    async updateV$(req, res){
        const { id } = req.params
        const { vivacoins } = req.body
        const user = User.update({ vivacoins }, {where: { id: id}})
        return res.json(user)
    },
    async updateP(req, res){
        const { id } = req.params
        const { pontos, ultimapontuação, vivacoins } = req.body
        const user = User.update({ pontos, ultimapontuação, vivacoins }, {where: { id: id}})
        return res.json(user)
    },
    async update(req, res){
        const { id } = req.params
        const { name, nometime, email, password} = req.body
        const user = User.update({ name, nometime, email, password }, {where: { id: id}})
        return res.json(user)
    }
}