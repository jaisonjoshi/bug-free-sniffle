const mongoose=require('mongoose')
const Schema=mongoose.Schema
const roomSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:{
        type:[{number:Number,unavailableDates:{type:[Date]}}],
        required:true
    }
}
,{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Room',roomSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
