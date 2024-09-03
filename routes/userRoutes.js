const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  getUser
} = require("../controllers/userController");

// Adds a new user to the database
router.post('/register', userRegister);

// Checks if the user is present in the database or not
router.post('/login', userLogin);

// Takes parameter(id) as an input and returns the data about a particular user
router.get('/:id', getUser);

module.exports = router;
