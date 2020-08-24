const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require('koa-router');
const { connect,initSchemas} = require('./database/init.js'); //引入connect
const bodyParser=require('koa-bodyparser')
const cors=require('koa2-cors')
const qiniu = require('qiniu')   //引入七牛云上传模块

const server = require('http').Server(app.callback());
const io = require('socket.io')(server)

//用户端引入路由模块
let user =require('./appApi/user.js')
let courses=require('./appApi/courses.js')
let userinfo =require('./appApi/userinfo')
let socket =require('./appApi/socket')
let question = require('./appApi/question.js')
let test = require('./appApi/test.js')
let result = require('./appApi/result.js')
let task = require('./appApi/task.js')

//管理端引用路由模块
let adminuser = require('./adminApi/adminuser')
let coursesmanage =require('./adminApi/coursesmanage')
let exammanagement = require('./adminApi/exammanagement')

//加载路由中间件

app.use(bodyParser());
app.use(cors());

//装载所有的子路由
let router =new Router();

//用户端
router.use('/user',user.routes());
router.use('/userinfo',userinfo.routes())
router.use('/courses',courses.routes());
router.use('/socket',socket.routes())
router.use('/question',question.routes())
router.use('/test',test.routes())
router.use('/result',result.routes())
router.use('/task',task.routes())

 //管理端
router.use('/adminuser',adminuser.routes());
router.use('/coursesmanage', coursesmanage.routes())
router.use('/exammanagement',exammanagement.routes())

app.use(router.routes()); //将router中所有的方法与实例挂钩
app.use(router.allowedMethods()); // 优化状态码的处理


//立即执行函数
(async () => {
    await connect()
    initSchemas()
   
})
();

let sum = 0;
io.on('connection',socket=>{
console.log('初始化成功');
const Message = mongoose.model('Message')
Message.find({},function(err,res){
    io.emit('getMsg',res);

})

//新人进来在线人数+1
socket.on('users',data=>{
 sum =sum +1;
 io.emit('users',sum); //将消息发送给所有人

})

//disconnection 断开，自带函数方法

socket.on('disconnection',data=>{
    console.log("用户断开了");

    if(sum>0)sum =sum -1;
    io.emit('users',sum)  //将消息发送给所有人
})

socket.on('send',data=>{
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


app.use(async (ctx) => {
    ctx.body = '<h1>hello Koa2</h1>'
});

server.listen(3000, () => {
    console.log('[Server] starting at port localhost:3000')
})