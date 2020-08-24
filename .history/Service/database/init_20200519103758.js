const mongoose = require('mongoose')
const glob = require('glob')
const {resolve} = require('path')
const db = "mongodb://localhost/Class"

mongoose.Promise = global.Promise

exports.connect = () => {
    //连接数据库
    mongoose.set('useCreateIndex', true)
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    })
    let maxConnectTimes = 0;
    return new Promise((resolve, reject) => {



        //增加数据库连接的事件监听
        mongoose.connection.on('disconnected', () => {
            //进行重连
            if (maxConnectTimes < 3) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法工作，请人为修复！')
            }

        })

        //数据库出现错误的时候
        mongoose.connection.on('error', err => {
            console.log('**********数据库错误**********')
            if (maxConnectTimes < 3) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法工作，请人为修复！')
            }
        })

        //链接打开的时候
        mongoose.connection.once('open', () => {
            console.log('MongoDB Connected successfully!')
            resolve()
        })
    })

}
exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}