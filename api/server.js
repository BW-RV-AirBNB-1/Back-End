require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

//server.use('/api', router);

server.get('/', (req, res) => {
    res.status(200).json({message: 'server working'});
})

module.exports = server;
