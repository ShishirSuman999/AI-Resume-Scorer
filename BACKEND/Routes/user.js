const express = require("express")
const router = express.Router()
const userController = require("../Controllers/user")

router.post("/", userController.register)

module.exports = router