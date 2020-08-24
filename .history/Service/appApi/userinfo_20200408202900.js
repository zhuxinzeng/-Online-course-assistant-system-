const Router =require ('koa-router')
const mongoose= require('mongoose')
let router=new Router();

router.get('/insertuserid',async(ctx)=>{
    ctx.body="用户ID插入"
    console.log('111')
})

module.exports=router;