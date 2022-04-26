const http = require('http')
const app = require('./app')
//const express = require('express')
//const app = express()
const config = require('./utils/config')
const logger = require('./utils/logger')
//const cors = require('cors')
//const mongoose = require('mongoose')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})