//import monogoose
const { default: mongoose } = require('mongoose');
const mmongoose=require('mongoose');

//route handler
const commentSchema=new mmongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"Post",//refernce to the post model
          
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
})

//export
module.exports=mongoose.model("Comment",commentSchema);
