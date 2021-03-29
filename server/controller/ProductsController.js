const ProductModel = require('../db/models').Products

  const getAllProducts = (req, res) => {
      return res.status(200).json({ message: 'ok'})
  }

  const updateProduct = (req, res) => {
    return res.status(200).json({ message: 'ok'})

  }
  
  const getProductById = (req, res) => {
    return res.status(200).json({ message: 'ok'})
    
  }

  const deleteProduct = (req, res) => {
    return res.status(200).json({ message: 'ok'})

  }
  
  const createProduct = async (req, res) => {

    try{        
        const { name, price , flavor , complement, image, type, sub_type } = req.body

        await ProductModel.create({name, price , flavor , complement, image, type, sub_type })
    
        return res.status(201).send({message: 'Product create'})

    }catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Missing informations'})
    }
    
  }  
  
  module.exports = { getAllProducts, updateProduct , getProductById, deleteProduct, createProduct }