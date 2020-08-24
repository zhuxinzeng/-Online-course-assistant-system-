const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/',async(ctx)=>{
    ctx.body='这个是task页面'
})
//管理端导入作业信息
router.post('/inserttask',async (ctx)=>{
    let taskinfo = ctx.request.body;
 console(taskinfo)
    const Task = mongoose.model('Task')

    await Task.save().then(result=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
    
})
module.exports= router;