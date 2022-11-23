const Review=require('../models/reviewModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getReviews=async(req,res)=>{
    const review=await Review.find(req.query).limit(req.query.limit).sort({rating: -1})
    
res.status(200).json(review)
}
//get a single workout
// const getHotel=async(req,res)=>{
//     const {id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:'No such hotel exists'})
//     }
//     const hotel=await Hotel.findById(id)
//     if(!hotel){
//         return res.status(404).json({error:'No such hotel found'})
//     }

//   res.status(200).json(hotel)
//}

//create a single workout--changes with params
const createReview=async (req,res)=>{
    const {image,desc,rating,username}=req.body
    //add to db
    try{
    
    const review=await Review.create({image,desc,rating,username})
    res.status(200).json({review})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
// const deleteHotel=async (req,res)=>{
//     const {id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:'No such hotel to delete'})
//     }
//     const hotel=await Hotel.findOneAndDelete({_id:id})
//     if(!hotel){
//         return res.status(400).json({error:'No such hotel found'})  
//     }
//     res.status(200).json(hotel)
// }

//update a workout
// const updateHotel=async (req,res)=>{
//     const {id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:'No such hotel to update'})
//     }
//     const hotel=await Hotel.findOneAndUpdate({_id:id},{
//         ...req.body
//     })
//     if(!hotel){
//         return res.status(400).json({error:'No such hotel found'})  
//     }
//     res.status(200).json(hotel)
// }

//for destination based results
//const hotel=await Hotel.find(req.query).sort({createdAt:-1}) for delhi hotel only
//query while searching ----?location=Delhi&limit=3
//sim for friends type 

//exports
module.exports={
    createReview,getReviews
}