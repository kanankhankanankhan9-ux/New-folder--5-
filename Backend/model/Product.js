import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,   // small p
})

const Product = mongoose.model('Product', productSchema)

export default Product   // schema nahi, model export karein