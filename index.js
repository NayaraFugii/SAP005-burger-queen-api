const express = require('express')
const dotenv = require('dotenv');
const authRouter = require('./server/routes/auth')
const routes = require('./server/routes/index')
const { initializeDB } = require('./server/db/db.js')
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
app.use(express.json())
app.use(authRouter)
app.use(routes);

app.listen(port, () => {
 // initializeDB()
  console.log(`listening at http://localhost:${port}`)
})