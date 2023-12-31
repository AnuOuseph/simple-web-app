const express = require('express')
const {registerUser,authUser,updateUser} = require('../controllers/userControllers')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').post(updateUser)

module.exports = router;