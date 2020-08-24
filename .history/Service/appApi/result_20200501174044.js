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
  
    const Result = mongoose.model('Result')
    let newResult = Result({name_list:userinfo})

    await newResult.save({}).then(result=>{
    console.log(newResult)
        ctx.body={
            code:200,
            message:'成功'
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
    

})
module.exports = router