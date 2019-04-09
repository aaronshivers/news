require('dotenv').config()

const express = require('express')
const app = express()
const compression = require('compression')
const helmet = require('helmet')

const port = process.env.PORT || 3000

const indexRoutes = require('./routes/index')

app.set('view engine', 'ejs')

app.use(helmet())
app.use(compression())
app.use(express.static('public'))

app.use(indexRoutes)

app.listen(port, () => console.log(`Server running on port ${ port }.`))

module.exports = app
