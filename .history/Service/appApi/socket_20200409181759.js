const Router = require('koa-router');
let router = new Router();

const mongoose = require('mongoose');

router.post('/socket',async(ctx)=>{
    let sum = 0;
    io.on('connection', socket => {
        console.log('初始化成功！');
        const Message = mongoose.model('Message')
        Message.find({}, function (err, res) {
            io.emit('getMsg', res);
        })
        //新人进来在线人数+1
        socket.on('users',data=>{
            sum = sum + 1;
            io.emit('users',sum); //将消息发送给所有人。
        })
        //disconnnect断开,自带函数方法
        socket.on('disconnect',data=>{
            console.log('用户断开了');
            sum = sum - 1;
            io.emit('users',sum); //将消息发送给所有人。
        })
        socket.on('send', data => {
            // console.log('客户端发送的内容：',data, data['name'], data['getMsg']);
            try {
                const Message = mongoose.model('Message')
                let oneUser = new Message({ name: data['name'], msg: data['getMsg'] })
                oneUser.save().then(() => {
                    const Message = mongoose.model('Message')
                    let dataArry = Message.find({}, function (err, res) {
                        console.log('获取到数据', res)
                        socket.emit('getMsg', res); //通知触发该方法的客户端
                        io.emit('getMsg', res); //通知所有客户端
                    })
                })
            } catch (error) {
                console.log("失败",error)
            }
        })
    })

})

