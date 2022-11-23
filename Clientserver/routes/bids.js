const express=require('express')
const router=express.Router()
const Bid=require('../models/bidModel')
const { createBid,getBid,getBids,deleteBid,updateBid
}=require('../controllers/bidController')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getBids)
//to get single workout
router.get('/:id',getBid)
//post a new request
router.post('/',createBid)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',deleteBid)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',updateBid)
module.exports=router