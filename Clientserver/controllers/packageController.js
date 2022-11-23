const Package=require('../models/packageModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getPackages=async(req,res)=>{
    const package=await Package.find(req.query).limit(req.query.limit).sort({createdAt:-1})
    
res.status(200).json(package)
}
//get a single workout
const getPackage=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package exists'})
    }
    const package=await Package.findById(id)
    if(!package){
        return res.status(404).json({error:'No such package found'})
    }

  res.status(200).json(package)
}

//create a single workout--changes with params
const createPackage=async (req,res)=>{
    const {title,
duration,
location,
address,
rooms,
images,
description,
rating,
cheapestPrice,
features,
startDate,
endDate,
offers}=req.body
    //add to db
    try{
    
    const package=await Package.create({title,
duration,
location,
address,
rooms,
images,
description,
rating,
cheapestPrice,
features,
startDate,
endDate,
offers})
    res.status(200).json({package})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
const deletePackage=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package to delete'})
    }
    const package=await Package.findOneAndDelete({_id:id})
    if(!package){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(package)
}

//update a workout
const updatePackage=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to update'})
    }
    const package=await Package.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!package){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(package)
}

//for destination based results
//const hotel=await Hotel.find(req.query).sort({createdAt:-1}) for delhi hotel only
//query while searching ----?location=Delhi&limit=3
//sim for friends type 

//exports
module.exports={
    createPackage,getPackage,
    getPackages,deletePackage,
    updatePackage
}