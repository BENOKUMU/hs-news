const express = require("express")
const route = express.Router();
const controller = require("../Controller/controller");

route.post("/api/register", controller.register)
route.post("/api/login", controller.login)

module.exports = route;