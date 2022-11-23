const Hotel=require('../models/hotelModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getHotels=async(req,res)=>{
    const hotel=await Hotel.find(req.query).limit(req.query.limit)
    
res.status(200).json(hotel)
}
//get a single workout
const getHotel=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel exists'})
    }
    const hotel=await Hotel.findById(id)
    if(!hotel){
        return res.status(404).json({error:'No such hotel found'})
    }

  res.status(200).json(hotel)
}

//create a single workout--changes with params
const createHotel=async (req,res)=>{
    const {title,
type,
location,
address,
rooms,
images,
description,
rating,
cheapestPrice,
features}=req.body
    //add to db
    try{
    
    const hotel=await Hotel.create({title,
type,
location,
address,
rooms,
images,
description,
rating,
cheapestPrice,
features})
    res.status(200).json({hotel})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
const deleteHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const hotel=await Hotel.findOneAndDelete({_id:id})
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
}

//update a workout
const updateHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to update'})
    }
    const hotel=await Hotel.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
}

//for destination based results
//const hotel=await Hotel.find(req.query).sort({createdAt:-1}) for delhi hotel only
//query while searching ----?location=Delhi&limit=3
//sim for friends type 

//exports
module.exports={
    createHotel,
    getHotels,
    getHotel,
    deleteHotel,
    updateHotel
}