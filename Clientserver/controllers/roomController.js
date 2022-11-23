const Room=require('../models/roomModel')
const Hotel=require('../models/hotelModel')
const mongoose=require('mongoose')


const getRooms=async(req,res)=>{
    try{
        const rooms=await Room.find()
        res.status(200).json(rooms)
    }catch(err){
        return res.status(404).json({error:'error in finding room'})
    }
}
const getRoom=async(req,res)=>{
    try{
        const room=await Room.findById(req.params.id)
        res.status(200).json(room)
    }catch(err){
        return res.status(404).json({error:'error in fetching the room'})
    }
}
const createRoom=async(req,res)=>{
    const hotelId=req.params.hotelid
    if(!mongoose.Types.ObjectId.isValid(hotelId)){
        return res.status(404).json({error:'No such room exists'})
    }
    const newRoom=new Room(req.body)
    try{
        const savedRoom=await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id},
            })
        }
        catch(err){
            return res.status(404).json({error:'error in saving room'})
    }
    res.status(200).json(savedRoom)
        }
        catch(err){
            return res.status(404).json({error:'error in saving room 2'})
        }
        }

    const updateRoom=async(req,res)=>{
        try{
            const updatedRoom=await Room.findByIdAndUpdate(
                req.params.id,{$set:req.body},{new:true}

            )
            res.status(200).json(updateRoom)
        }
        catch(err){
            return res.status(404).json({error:'error in updating room'})
        }
    }

    const updateRoomAvail=async(req,res)=>{
        try{
            await Room.updateOne({
                "roomNumbers._id":req.params.id},{
                    $push:{
                        "roomNumbers.$.unavailableDates:":req.body.dates
                    },
                }
            )
            res.status(200).json("Room status has been updated")
        }catch (err){
            return res.status(404).json({error:'error in updating room availability status'})
        }
    }

    const deleteRoom=async(req,res)=>{
        const hotelId=req.params.hotelid
        try{
            await Room.findByIdAndDelete(req.params.id)
            try{
                await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id},})
            }catch(err){
                return res.status(404).json({error:'error in deleting room'})
            }
            res.status(200).json("Room has been deleted")
            }catch(err){
                return res.status(404).json({error:'error in deleting room2'})
            }
        }

module.exports={
    getRooms,
    getRoom,
    createRoom,
    deleteRoom,
    updateRoom,
    updateRoomAvail
}
    
    



