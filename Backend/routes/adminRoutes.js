const express = require('express')
const {authAdmin, registerAdmin,getData,addUser,deleteUser,editUser} = require('../controllers/adminControllers')
const {protect} = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/').post(registerAdmin)
router.route('/login').post(authAdmin)
router.route('/dashboard').get(getData)
router.route('/add-user').post(addUser)
router.route('/delete-user').post(deleteUser)
router.route('/edit-user').post(editUser)

module.exports = router;