const express=require('express')
const router=express.Router()
//const Hotel=require('../models/hotelModel')
const { getRoom,
    getRooms,
    createRoom,
    updateRoom,
    deleteRoom,
    updateRoomAvail
}=require('../controllers/roomController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getRooms)
//to get single workout
router.get('/:id',getRoom)
//post a new request
router.post('/:hotelid',verifyAdmin,createRoom)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id/:hotelid',verifyAdmin,deleteRoom)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',verifyAdmin,updateRoom)
router.patch('/availability/:id',verifyAdmin,updateRoomAvail)//err
module.exports=router