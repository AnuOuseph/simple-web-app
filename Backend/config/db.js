const mongoose = require('mongoose')


const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`)  
        process.exit()
    }
}

module.exports =  connectDb;