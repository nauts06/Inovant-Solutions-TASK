const { default: mongoose } = require("mongoose")
const moongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    cloudinary_id:{
        type:String
    }
})

module.exports = moongoose.model("User",userSchema)