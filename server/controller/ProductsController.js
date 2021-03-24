  
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
  
  const createProduct = (req, res) => {
    return res.status(200).json({ message: 'ok'})
    
  }
  
  
  
  module.exports = { getAllProducts, updateProduct , getProductById, deleteProduct, createProduct }