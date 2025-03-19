const { Router } = require('express')
const  jwt = require('jsonwebtoken')
const { userModel } = require('../db')
const { z } = require('zod')
const bcrypt = require('bcrypt')
const {JWT_SECRET} = require('../config')

const userRouter = Router();

userRouter.post('/signup',async (req,res)=>{

    
    const { password, email, firstName, lastName} = req.body;
    const hashedPassword = await bcrypt.hash(password, 5)


    try{
      await userModel.create({
        email: email,
        password: hashedPassword,
        firstname: firstName,
        lastname: lastName,
      })

      res.status(200).send({
        message: "Succesfully seigned in"
      })
         
    }catch(e){
        res.status(500).send({
            message: "Error occured",
            error: e.message,
        })
    }
})

userRouter.post('/signin',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({email: email})

    const matchPassword = await bcrypt.compare(password,user.password)
    if(matchPassword){
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET)
        return res.status(200).json({token:token})
    }

    res.json({
        message: "Signed in"
    })
})

module.exports = {
    userRouter: userRouter,
}