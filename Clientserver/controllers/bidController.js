
const Bid=require('../models/bidModel')
const mongoose=require('mongoose')

//get all bids
//inside 'find' you can pass params if you need filtered result
const getBids=async(req,res)=>{
    const bid=await Bid.find({}).sort({createdAt:-1})
res.status(200).json(bid)
}
//get a single bid
const getBid=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such bid exists'})
    }
    const bid=await Bid.findById(id)
    if(!bid){
        return res.status(404).json({error:'No such hotel found'})
    }

  res.status(200).json(bid)
}

//create a single bid--changes with params
const createBid=async (req,res)=>{
    const {destination,
        categories,
        AC,
        checkIn,
        checkOut,
        accomodation,
        roomCount,
        maxAmount,
        minAmount

}=req.body
    //add to db
    try{
    
    const bid=await Bid.create({destination,
        categories,
        AC,
        checkIn,
        checkOut,
        accomodation,
        roomCount,
        maxAmount,
        minAmount})
    res.status(200).json({bid})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a bid
const deleteBid=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such bid to delete'})
    }
    const bid=await Bid.findOneAndDelete({_id:id})
    if(!bid){
        return res.status(400).json({error:'No such bid found'})  
    }
    res.status(200).json(bid)
}

//update a bid
const updateBid=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const bid=await Bid.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!bid){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(bid)
}
//exports
module.exports={
    createBid,
    getBid,
    getBids,
    deleteBid,
    updateBid
}