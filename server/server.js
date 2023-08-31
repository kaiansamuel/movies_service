'use strict'
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const server = null

async function start(){
  const app = express()

  app.use(helmet())
  app.use(morgan('dev'))

  app.get('health', (req, res, net) => {
    res.send(`The service ${process.env.MS_NAME} is running at ${process.env.PORT}`)
  })

  app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500)
  })

  server = app.listen(process.env.PORT, () => {
    console.log(`The service ${process.env.MS_NAME} already started at ${process.env.PORT}`)
  })
}

