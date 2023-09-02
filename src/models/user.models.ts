import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  userId:{
    type:String,
    unique:true,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true,
    default:"general"
  }
},{timestamps: true})

const userModel = mongoose.model('user',userSchema)

export default userModel