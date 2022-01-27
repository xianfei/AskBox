const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    nickName:String,
    password:String,
    boxiesIds:[String],
    bindingQuesIds:[String],
    message:[{type:String,text:String,targetId:String,hasRead:Boolean}]
})

const BoxSchema = new mongoose.Schema({
    userId:String,
    name:String,
    answeredQuesIds:[String],
    noAnswerQuesIds:[String],
})

const QuestionSchema = new mongoose.Schema({
    boxId:String,
    askUserId:String,
    question:String,
    hasAnswer:Boolean,
    answer:String
})

const User = mongoose.model('User',UserSchema)
const Box = mongoose.model('Box',BoxSchema)
const Question = mongoose.model('Question',QuestionSchema)

module.exports = {User,Box,Question}