const Router =require ('koa-router')
const mongoose= require('mongoose')
let router=new Router();

router.post('/insertuserid',async(ctx)=>{
    ctx.body="用户ID插入"
})