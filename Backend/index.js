import express, { request, response } from 'express'
import cors from 'cors'
import connectDb from './Confige/connectDb.js'
import user from './model/userModel.js'
import axios from 'axios'


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





app.listen(5000)  