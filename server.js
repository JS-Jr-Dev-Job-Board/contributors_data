require("colors");
const express = require("express");
const helmet = require("helmet");
const contributorsRouter = require("./router/contributors-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/contributors", contributorsRouter);

module.exports = server;
