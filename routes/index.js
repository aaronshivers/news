const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const { API_KEY } = process.env
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ API_KEY }`


// GET /
router.get('/', (req, res) => {

  try {

    // render home
    res.send(url)

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})
module.exports = router
