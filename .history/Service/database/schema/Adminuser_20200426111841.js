const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
let ObjectId = Schema.Types.ObjectId //声明Object类型
//创建我们的管理端用户Schema
const AdminuserSchema = new Schema({
    ID:ObjectId,
    name:String,
    pass:String,
    tel:String,
    sex: String,
    college: String,
    email: String,
    job:String
    
}, {
    collection: 'adminuser'
})
//代码保存之前加盐加密
AdminuserSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.pass, salt, (err, hash) => {
            if (err) return next(err)
            this.pass = hash;
            next()
        })
    })
})
AdminuserSchema.methods = {
    //密码比对的方法
    comparePassword: (_pass, pass) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_pass, pass, (err, isMatch) => {
                if (!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}
//发布模型
mongoose.model('Adminuser', AdminuserSchema)