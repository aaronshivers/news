const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const { API_KEY } = process.env
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ API_KEY }`


// GET /
router.get('/', async (req, res) => {

  try {

    // get news feed
    const response = await fetch(url)
    const data = await response.json()

    // render index page
    res.render(`index`, { data })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})
module.exports = router
