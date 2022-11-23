const express=require('express')
const router=express.Router()
const Hotel=require('../models/hotelModel')
const { createHotel,
    getHotels,
    getHotel,
    deleteHotel,updateHotel
}=require('../controllers/hotelController')
const {verifyAdmin} =require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getHotels)
//to get single workout
router.get('/:id',getHotel)
//post a new request
router.post('/',verifyAdmin,createHotel)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',verifyAdmin,deleteHotel)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',verifyAdmin,updateHotel)
module.exports=router