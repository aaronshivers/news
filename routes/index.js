const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const { API_KEY } = process.env

// GET /
router.get('/', async (req, res) => {

  try {

    // category
    const category = `Top Stories`

    // top stories url
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /business
router.get('/business', async (req, res) => {

  try {

    // category
    const category = `Business`

    // business url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /entertainment
router.get('/entertainment', async (req, res) => {

  try {

    // category
    const category = `Entertainment`

    // entertainment url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /general
router.get('/general', async (req, res) => {

  try {

    // category
    const category = `General`

    // general url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /health
router.get('/health', async (req, res) => {

  try {

    // category
    const category = `Health`

    // health url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /science
router.get('/science', async (req, res) => {

  try {

    // category
    const category = `Science`

    // science url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /sports
router.get('/sports', async (req, res) => {

  try {

    // category
    const category = `Sports`

    // sports url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

// GET /technology
router.get('/technology', async (req, res) => {

  try {

    // category
    const category = `Technology`

    // technology url
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ API_KEY }`

    // get news feed
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles

    // render index page
    res.render('index', { category, articles })

  } catch (error) {

    // send error message
    console.log(error.message)
    // res.render('error', { msg: error.message })
  }
})

module.exports = router
