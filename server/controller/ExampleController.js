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

const getAllExamples = (req, res) => {
  res.send(data)
}

const getUserId = (req, res)=>{
  const id= Number(req.params.id)
  console.log(id)
  const array = data.filter(data => data.id === id)
  res.status(201).send(array)
}

module.exports = { getAllExamples, getUserId }