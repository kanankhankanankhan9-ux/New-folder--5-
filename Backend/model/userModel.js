import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fName:String,
    email:String,
    password:String
})

const user = mongoose.model('user', userSchema)



export default user