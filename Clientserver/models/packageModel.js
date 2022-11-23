const mongoose=require('mongoose')
const Schema=mongoose.Schema
const packageSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rooms:{
        type:[String],
        required:true
    },
    images:{
        type:[String]
        
    },
    description: {
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    features:{
        type:[String],
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    offers:{
        type:Boolean,
        default:false,
        required:true
    }

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Package',packageSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
