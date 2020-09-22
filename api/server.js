const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js')
const listingsRouter = require('../listings/listings-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);
server.use('/api', authRouter, authenticate, listingsRouter);

server.get("/", (_, res) => {
    res.status(200).json({ api: "up" });
  });
module.exports = server;
