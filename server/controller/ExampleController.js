// aqui vai o código que acessa o banco de dados

const data = [
  {
    "id":1,
    "name": "Nayara",
    "sobrenome": "Fugii",
  },
  {
    "id":2,
    "name": "Bia",
    "sobrenome": "Costa",
  },
  {
    "id":3,
    "name": "Luana",
    "sobrenome": "Santana",
  }
]

const dataUser = []

const getAllUsers = (req, res) => {
  res.send(data)
}

const getUserId = (req, res)=>{
  const id= Number(req.params.id)
  const array = data.filter(data => data.id === id)
  res.status(201).send(array)
}

const newUsers = (req, res) =>{
  if(!req.body.name || !req.body.email ||!req.body.password ||!req.body.role ||!req.body.restaurant ){
    res.status(400).send({message: "insufficient registration information"})
  }else{
    dataUser.push(req.body)
     res.status(201).send()
     console.log(dataUser)
  }

}



module.exports = { getAllUsers, getUserId , newUsers}