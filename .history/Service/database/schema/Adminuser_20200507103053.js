const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema

let ObjectId = Schema.Types.ObjectId //声明Object类型
//创建我们的管理端用户Schema
const AdminuserSchema = new Schema({
    ID:ObjectId,
    name:String,
    pass:String,
    avatar:String,
    tel:String,
    sex: String,
    college: String,
    email: String,
    job:String,
    
}, {
    collection: 'adminuser'
})

//发布模型
mongoose.model('Adminuser', AdminuserSchema)