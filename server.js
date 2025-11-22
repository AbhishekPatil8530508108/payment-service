const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('welcome to payment service')
})

app.post('/payment', (request, response) => {
  response.send('payment successful')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
