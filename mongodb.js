const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/FriendZLogin')
.then(() => {
    console.log("Mongodb connected")
})
.catch(() => {
    console.log("failed to connect")
})

const LoginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection",LoginSchema)

module.exports=collection