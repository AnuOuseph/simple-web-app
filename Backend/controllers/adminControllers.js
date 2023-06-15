const asyncHandler = require('express-async-handler') 
const Admin = require('../models/adminModels')
const User = require('../models/usermodel')
const generateToken = require('../utils/generateToken')
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');




const registerAdmin = asyncHandler(async(req,res)=>{
    const {adminName,adminEmail,adminPassword} = req.body

    const adminExists = await Admin.findOne({adminEmail})

    if(adminExists){
        res.status(400)
        throw new Error('Admin already exists')
    }
    
    const admin = await Admin.create({
        adminName,
        adminEmail,
        adminPassword,
    })

    if(admin){
        res.status(201).json({
            _id: admin._id,
            adminName:admin.adminName,
            adminEmail:admin.adminEmail,
            adminPassword:admin.adminPassword,
            isAdmin:admin.isAdmin,
            token:generateToken(admin._id),
        })
    }else{
        res.status(400)
        throw new Error('error occured')
    }

   
})

const authAdmin = asyncHandler(async(req,res)=>{
    const {adminEmail,adminPassword} = req.body;
    console.log("body",req.body)

    const admin = await Admin.findOne({adminEmail})
    console.log('admin',admin)

    if(admin && (await admin.adminPassword === adminPassword)){
        res.json({
            _id: admin._id,
            adminEmail:admin.adminEmail,
            token:generateToken(admin._id), 
            isAdmin: admin.isAdmin,
        })
    }else{
        res.status(400)
        throw new Error("Invalid email or Passowrd")
    }
})

const getData = asyncHandler(async(req,res)=>{
    const data = await User.find()
    res.json(data)
})

const addUser = asyncHandler(async(req,res)=>{
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

const deleteUser = asyncHandler(async(req,res)=>{
    const {_id} = req.body
    console.log("noo",req.body);
    const user = await User.findOne({_id})
    console.log(user);
    await User.deleteOne({_id})
    const data = await User.find()
    res.json(data)
    
})
const editUser = asyncHandler(async(req,res)=>{
    const {_id,nameEdit,emailEdit,phoneEdit} = req.body
    console.log("noo",req.body);
    let id = new ObjectId(_id)
    const user = await User.updateOne(
        { _id: id },
         { name: nameEdit, email: emailEdit, phone: phoneEdit } 
    )
    console.log("nhyy",user);
    res.json(user)
    // if(user){
    //     user.name = nameEdit,
    //     user.email = emailEdit,
    //     user.phone = phoneEdit
    //     const updatedUser = await User.save()
    //     res.json(updatedUser)
    // }
    // else{
    //     res.status(400)
    //     throw new Error('error occured')
    // }
    
})


module.exports = {authAdmin,registerAdmin,getData,addUser,deleteUser,editUser}