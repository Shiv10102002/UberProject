const express = require('express'); 
const router = express.Router();
const userController = require('../controllers/user.controller');
const { body } = require('express-validator');

router.post('/register', [
    body('fullname.firstname')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long'),
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
   
], userController.registerUser);

module.exports = router;