const mongoose = require("mongoose")

const ProductdetailsSchema = mongoose.Schema({
    
  title :String,
  price: Number,
  discount: Number,
  images : Array,
  category : String

    

    })

module.exports = mongoose.model("Productdetails", ProductdetailsSchema);