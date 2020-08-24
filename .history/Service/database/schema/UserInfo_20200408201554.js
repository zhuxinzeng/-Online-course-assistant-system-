const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
const Courses = mongoose.model('Courses')
const User = mobgoose.model('User')
let ObjectId = Schema.Types.ObjectId //声明Object类型
//创建我们的用户Schema
const userinfoSchema = new Schema({
    ID:{
        type:ObjectId,
        ref:'User'
    },
    username:{
        type:ObjectId,
        ref:'User'
    },
    password:{
        type:ObjectId,
        ref:'User'
    },
    tel:String,
    sex: String,
    major: String,
    email: String,
    studentid: String,
    courseid:{
        type:ObjectId,
        ref:'Courses'
    }
    
}, {
    collection: 'userinfo'
})

//发布模型
mongoose.model('UserInfo', userinfoSchema)