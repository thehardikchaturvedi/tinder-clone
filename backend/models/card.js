const mongoose=require('mongoose')
const cardSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      imgUrl: {
        type: String,
        required: true,
        trim: true,
      },
},{timestamps:true})

module.exports=mongoose.model('Card',cardSchema)