const express=require('express')
const router=express.Router()
const Package=require('../models/packageModel')
const {  createPackage,getPackage,
    getPackages,deletePackage,
    updatePackage
}=require('../controllers/packageController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getPackages)
//to get single workout
router.get('/:id',getPackage)
//post a new request
router.post('/',verifyAdmin,createPackage)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',verifyAdmin,deletePackage)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',verifyAdmin,updatePackage)
module.exports=router