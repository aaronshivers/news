const request = require('supertest')
const expect = require('expect')

const app = require('../')

describe('/', () => {
  
  it('should respond 200', async () => {
  
    await request(app)
      .get('/')
      .expect(200)
  })
})
