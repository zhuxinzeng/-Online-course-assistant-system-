const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const Router = require('koa-router');
const { connect,initSchemas} = require('./database/init.js'); //引入connect
const bodyParser=require('koa-bodyparser')
const cors=require('koa2-cors')

//引入路由模块
let user =require('./appApi/user.js')
let courses=require('./appApi/courses.js')
let userinfo =require('./appApi/userinfo')

//加载路由中间件

app.use(bodyParser());
app.use(cors());

//装载所有的子路由
let router =new Router();
router.use('/user',user.routes());
router.use('/userinfo',userinfo.routes())
router.use('/courses',courses.routes());



app.use(router.routes()); //将router中所有的方法与实例挂钩
app.use(router.llowedMethods()); // 优化状态码的处理


//立即执行函数
(async () => {
    await connect()
    initSchemas()
   
})
();

app.use(async (ctx) => {
    ctx.body = '<h1>hello Koa2</h1>'
});

app.listen(3000, () => {
    console.log('[Server] starting at port localhost:3000')
})