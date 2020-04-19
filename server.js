const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json('Farm API')
})

const farmRouter = require('./farms/farm_router.js')

server.use('/api', farmRouter)

module.exports = server;