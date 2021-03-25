const bcrypt = require('bcrypt')
const UserModel = require('../db/models').User


const getAllUsers = async (req, res) => {
    const users = await UserModel.findAll({
        attributes: ['email']
    })

    return res.status(200).json({ users })
}

const updateUser = async (req, res) => {
    const { userID } = req.params
    const { email } = req.body

    const user = await UserModel.findByPk(userID);

    if(!user) return res.status(404).json({ message: 'User not found.'})
    
    user.email = email

    await user.save();
    return res.status(200).send()
}

const getUserById = async (req, res) => {
    const { userID } = req.params

    if(!userID) return res.status(400).json({ message: 'Missing \'UserId\'.' })

    const user = await UserModel.findOne({ where: { id: userID }, attributes: ['email']})

    if(!user) return res.status(404).json({ message: 'User not found.' })

    return res.status(200).json({ user })

}

const deleteUser = (req, res) => {
    const { userID } = req.params

    if(!userID) return res.status(400).json({ message: 'Missing \'UserId\'.' })

    UserModel.destroy({ where: { id: userID }});

    return res.status(200).send()
}

const createUser = async (req, res) => {
    try{        
        const { name, email , passwoard , role, restaurant } = req.body

        console.log(passwoard)
        await UserModel.create({name, email, passwoard, role, restaurant})
    
        const passwordHash = await bcrypt.hash(passwoard, 10)   
    
        return res.status(201).send({message: 'User create'})

    }catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Missing informations'})
    }
    
}

module.exports = { getAllUsers, updateUser , getUserById, deleteUser, createUser }
