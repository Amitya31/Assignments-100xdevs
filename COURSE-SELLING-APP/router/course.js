const { Router } = require('express')

const courseRouter = Router();


courseRouter.get('/preview',async (req,res)=>{

    res.json({
        message:"preview "
    })
})

courseRouter.get('/purchase',(req,res)=>{
    res.json({
        message:"found"
    })
})


module.exports = {
    courseRouter:courseRouter,
}