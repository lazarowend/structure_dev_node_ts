import express from 'express'

const app = express()

app.get('/', (response, request) => {
  return request.json({ message: 'ola' })
})

app.listen(8000)
