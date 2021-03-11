const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);

router.post("/create", usersController.createUser);

module.exports = router;
