const mongoose = require('mongoose');
const { Schema }  = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
console.log('connected to')

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
})

const adminSchema = new Schema({
    email: {type:String, unique: true},
    password: String,
    firstname: String,
    lastname: String,
})

const courseSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId,
})

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)

module.exports= {
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel,
}