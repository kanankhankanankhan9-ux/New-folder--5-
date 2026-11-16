import mongoose from "mongoose";


const connectDb = async () =>{
    await mongoose.connect('mongodb://localhost:27017/auth')
    console.log('mangodb is connected');
}


export default connectDb