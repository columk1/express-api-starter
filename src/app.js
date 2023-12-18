import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import errorHandler from './common/middleware/error_handler.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Express API Starter' })
})

// 404
app.use('*', (req, res) => {
  res.status(404)
  throw new Error('Not found')
})

app.use(errorHandler)

export default app
