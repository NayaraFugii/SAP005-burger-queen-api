const ProductModel = require('../db/models').Products

  const getAllProducts = async (req, res) => {
    const products = await ProductModel.findAll({
      attributes: ['id','name', 'price', 'flavor', 'complement', 'image', 'type', 'sub_type']
  })

  return res.status(200).json({ products })
  }

  const updateProduct = async (req, res) => {
    const { productID } = req.params
    const { name, price , flavor , complement, image, type, sub_type } = req.body

    const products = await ProductModel.findByPk(productID);

    if(!products) return res.status(404).json({ message: 'Product not found.'})
    
    products.name = name
    products.price = price
    products.flavor = flavor
    products.complement = complement
    products.image = image
    products.type = type
    products.sub_type = sub_type

    await products.save();
    return res.status(200).send()

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