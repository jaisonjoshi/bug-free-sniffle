require('dotenv').config()


const express=require('express')
const mongoose=require('mongoose')
const {createServer} = require("http")
const { Server } = require("socket.io");

const hotelRoutes=require('./routes/hotels')
const roomRoutes=require('./routes/rooms')
const bidRoutes=require('./routes/bids')
const packageRoutes = require('./routes/packages')
const reviewRoutes=require('./routes/reviews')
const offerRoutes = require('./routes/offers')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/users')
const cookieParser=require('cookie-parser')



const app=express()
app.use(cookieParser())
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*  "
    }
});

const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/hotels',hotelRoutes)
app.use('/api/rooms',roomRoutes)
app.use('/api/bids',bidRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/reviews',reviewRoutes)
app.use('/api/offers', offerRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)




mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(()=>{
        httpServer .listen(process.env.PORT, ()=> {
            console.log("server is up");
        })
        
        
        io.on("connection", (socket) => {
            console.log("connected and socket id is ", socket.id);
        })
        console.log("db is connected")})
    .catch((error)=>{
        console.log(error)
        process.exit(1)
    })

