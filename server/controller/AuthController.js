const bcrypt = require('bcrypt')

const UserModel = require('../db/models/userModel')

const { generateToken } = require('../utils/jwt')


const login = async (req, res) => {
    const { email , senha } = req.body

    if(!email  || !senha) return res.status(400).json({ message: 'Missing \'Email / Password\'. 🔐' })

    const user = await UserModel.findOne({ where: { email: email }});

    if(!user) return res.status(404).json({ message: 'User not found' })

    const match = await bcrypt.compare(senha, user.senha)

    if(!match) return res.status(400).json({ message: 'Wrong password. 🔐' })

    const token = generateToken({ email: user.email })

    return res.status(200).json({ token })
}

module.exports = { login }