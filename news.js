const express = require('express')
const app = express()
const fetch = require('node-fetch')

const port = process.env.PORT || 3000

const indexRoutes = require('./routes/index')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(indexRoutes)

app.listen(port, () => console.log(`Server running on port ${ port }.`))

module.exports = app
