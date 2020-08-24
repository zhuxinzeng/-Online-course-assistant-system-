const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
//创建我们的管理端用户Schema
const AdminuserSchema = new Schema({
    name:String,
    pass:String,
    avatar:String,
    tel:String,
    sex: String,
    college: String,
    email: String,
    job:String,
    createAt: {
        type: Date,
        default: Date.now()
    }, 
    lastLoginAt: {
        type: Date,
        default: Date.now()
    },
    
}, {
    collection: 'adminuser'
})

//发布模型
mongoose.model('Adminuser', AdminuserSchema)