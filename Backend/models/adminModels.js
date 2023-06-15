const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const adminSchema = mongoose.Schema(
    {
        adminName:{
            type:String,
            required:true,
        },
        adminEmail:{
            type:String,
            required:true,
            unique:true,
        },
        adminPassword:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:true,
        }
    }
)

adminSchema.pre('save', async function(next){
    if(!this.isModified('adminPassword')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.adminPassword = await bcrypt.hash(this.adminPassword, salt)
})

adminSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.adminPassword);
}

const Admin = mongoose.model('Admin',adminSchema)

module.exports= Admin;