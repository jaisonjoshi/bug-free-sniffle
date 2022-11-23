const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bidSchema=new Schema({
    destination:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        enum:['Honeymoon','Family','Friends','Holiday'],
        required:true
    },
    AC:{
        type:Boolean,
        required:true
    },
    checkIn:{
        type:Date,
        required:true
    },
    checkOut:{
        type:Date,
        required:true
    },
    accomodation:{
        type:Number,
        required:true
    },
    roomCount:{
        type:Number,
        required:true
        
    },
    maxAmount: {
        type:Number,
        required:true
    },
    minAmount: {
        type:Number,
        required:true
    }

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Bid',bidSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
