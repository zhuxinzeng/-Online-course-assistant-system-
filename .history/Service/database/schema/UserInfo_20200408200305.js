const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
const Courses = mongoose.model('Courses')
let ObjectId = Schema.Types.ObjectId //声明Object类型
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
//创建我们的用户Schema
const userinfoSchema = new Schema({
    ID:Array,
    tel:String,
    sex: String,
    major: String,
    email: String,
    studentid: String,
    
    
}, {
    collection: 'userinfo'
})

//发布模型
mongoose.model('UserInfo', userinfoSchema)