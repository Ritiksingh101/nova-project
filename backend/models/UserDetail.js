const mongoose = require("mongoose")

const UserDetailSchema = mongoose.Schema({
    
    name: String,
    password : String,
    email : String,
    phone : Number,
    cart: Array

    

    })

module.exports = mongoose.model("UserDetail", UserDetailSchema);