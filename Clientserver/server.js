require('dotenv').config()


const express=require('express')
const mongoose=require('mongoose')
const hotelRoutes=require('./routes/hotels')
const roomRoutes=require('./routes/rooms')
const bidRoutes=require('./routes/bids')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const packageRoutes=require('./routes/packages')
const reviewRoutes=require('./routes/reviews')
const cookieParser=require('cookie-parser')
//const faqRoutes=require('./routes/faq')



const app=express()
app.use(cookieParser())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/hotels',hotelRoutes)
app.use('/api/rooms',roomRoutes)
app.use('/api/bids',bidRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/reviews',reviewRoutes)
app.use('/api/packages',packageRoutes)
//app.use('/api/faq',faqRoutes)

mongoose.connect(process.env.MONGO_URI)
   //funct to do the next step after connection
    .then(()=>{app.listen(process.env.PORT,()=>{
            console.log('connected to db and welcome to our  port',process.env.PORT)
         })})
    .catch((err)=>{
        console.log(err)
    })