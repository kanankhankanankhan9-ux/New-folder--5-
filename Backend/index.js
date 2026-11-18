import express from 'express'
import cors from 'cors'
import connectDb from './Confige/connectDb.js'
import user from './model/userModel.js'
import Product from './model/Product.js'



connectDb()
const app = express()
app.use(cors())
app.use(express.json())


app.post('/Signup', async(request,response) =>{
    const {fName,email,password} = request.body
    const findUser = await user.findOne({email})
    if (findUser){
        return response.send('Email is already taken')   
    }
     await user.create({fName,email,password})
    response.send('Account Successful')
})

app.post('/Login', async (request,response) =>{
    const{email,password}= request.body
    const finduser = await user.findOne({email})
    if(!finduser){
        return response.json({
            msg:'User not found',
            success:false
        })

    } 
    if(finduser.password  !== password){
        return response.json({
            msg:'Invalid password',
            success: false
        })
    }
    return  response.json({
        msg:'Login Successful',
        success:true
    })
})
app.post('/Product', async (request, response) => {
    const { name, price } = request.body
    const newProduct = await Product.create({ name, price })
    response.json(newProduct)
})

app.get('/Product', async (request, response) => {
    const allProducts = await Product.find()
    response.json(allProducts)
})

app.post('/delete', async (request, response) => {
    const { _id } = request.body
    await Product.findByIdAndDelete(_id)
    response.json({ message: 'Deleted' })
})





app.listen(5000)  