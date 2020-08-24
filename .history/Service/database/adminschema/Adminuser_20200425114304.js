const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
const User = mongoose.model('User')
let ObjectId = Schema.Types.ObjectId //声明Object类型
//创建我们的管理端用户Schema
const AdminuserSchema = new Schema({
    ID:ObjectId,
    username:{
        type:ObjectId,
        ref:'User'
    },
    password:String,
    tel:String,
    sex: String,
    college: String,
    email: String,
    post:String
    
}, {
    collection: 'adminuser'
})

//发布模型
mongoose.model('Adminuser', AdminuserSchema)