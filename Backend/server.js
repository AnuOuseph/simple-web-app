const express =require ('express')
const app =express()
const dotenv = require('dotenv')
const notes = require('./notes/data')
const cors = require('cors')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

dotenv.config();
connectDb();

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send('api is running...')
})

app.get("/api/notes",(req,res)=>{
    res.send(notes)
})

app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server on port ${PORT}`)) 