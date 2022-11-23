const mongoose=require('mongoose')
const Schema=mongoose.Schema
const reviewSchema=new Schema({
    
    
    image:{
        type:String
        
    },
    desc: {
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    username:{
        type:String,
        required:true
    }

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Review',reviewSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
