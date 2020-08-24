const Router = require('koa-router');
const mongoose = require('mongoose');
const fs = require('fs');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是result页面'
})
//导入知识检测
router.post('/insertresult',async(ctx)=>{
    let userinfo = ctx.request.body;
    console.log(userinfo)

})
module.exports = router