const mongoose=require("mongoose")

require("dotenv").config();

const connectwith=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connected successully"))
    .catch((error)=>{
        console.log("DB Facing ConnectionIssues");
        console.log(error);
        process.exit(1);
    })
}

module.exports=connectwith;