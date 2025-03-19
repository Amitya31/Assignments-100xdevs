const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const bcrypt = require('bcrypt')

const adminRouter = Router();
const { adminModel, courseModel } = require('../db')
const { JWT_SECRET_ADMIN } = require('../config');
const { adminMiddleware } = require('../middlewares/admin');


//adminRouter.use(adminMiddleware)

adminRouter.post('/signup',async (req,res)=>{
    const { password, email, firstName, lastName} = req.body;
    const hashedPassword = await bcrypt.hash(password, 5)


    try{
      await adminModel.create({
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

adminRouter.post('/signin',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    try{
     const user = await adminModel.findOne({email: email})

     const matchPassword = await bcrypt.compare(password,user.password)
     if(matchPassword){
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET_ADMIN)
        return res.status(200).json({token:token})
     }
    

     res.json({
        message: "Errpr occured wrong credentials"
     })
    }catch(error){
        res.status(500).json({
            message: "Error occured",
            error: error.message,
        })
    }

})

adminRouter.post('/',adminMiddleware,async (req,res)=>{
    const adminId = req.adminId;
    const {title, description, price, imageUrl} = req.body;

    try{
        const course = await courseModel.create({
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price,
            creatorId: adminId,
        })

        res.status(200).json({
            message: "Successfully course created",
            courseId: course._id
        })
    }catch(error){
        res.status(500).json({
            message:"you were not signed in"
        })
    }
})

adminRouter.put('/',adminMiddleware,async (req,res)=>{
    const adminId = req.adminId;

    const {title, description, price, imageUrl, courseId} = req.body;

    try{
        const course = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        },{
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
        })

        res.status(200).json({
            message: "Successfully course updated",
            courseId: course._id
        })
    }catch(error){
        res.status(500).json({
            message:"you were not signed in"
        })
    }
})

adminRouter.get('/bulk',adminMiddleware,async (req,res)=>{ // instead of writing /api/v1/course/course we will only write '/'
    const adminId = req.adminId;

    const course = await courseModel.findMany({
        creatorId: adminId,
    })

    res.status(200).json({
        message:"Course found",
        courseId: course._id,
    })

})

adminRouter.delete('/course/:id',(req,res)=>{

})

module.exports = {
    adminRouter:adminRouter,
}

