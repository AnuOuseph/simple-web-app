const asyncHandler = require('express-async-handler') 
const User = require('../models/usermodel')
const generateToken = require('../utils/generateToken')

const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,phone,password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    
    const user = await User.create({
        name,
        email,
        phone,
        password,
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            password:user.password,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('error occured')
    }

   
})

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    console.log("body",req.body)

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            token:generateToken(user._id),
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(400)
        throw new Error("Invalid email or Passowrd")
    }
})

const updateUser = asyncHandler(async(req,res)=>{

})

module.exports = {registerUser,authUser,updateUser}