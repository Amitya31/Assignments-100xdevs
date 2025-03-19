const express = require('express')
const mongoose = require('mongoose')
const { userRouter } = require('./router/user')
const { courseRouter } = require('./router/course')
const { adminRouter } = require('./router/admin')


const app = express()

app.use(express.json());

app.use('/api/v1/user',userRouter)
app.use('/api/v1/course',courseRouter)
app.use('/api/v1/admin',adminRouter)

async function main(){
    await mongoose.connect('mongodb+srv://amit31:c6Ij6CtMKNXjSmHA@cluster0.tee05.mongodb.net/coursera')
    app.listen(3000)
    console.log('Listening at Port 3000')
}

main()

