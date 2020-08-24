const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.post('/insertuserid', async (ctx) => {
    // ctx.body="用户ID插入"
    // console.log('111')

    try {
        let id = ctx.request.body
        let ID = id.message
        const Userinfo = mongoose.model('Userinfo')
        let newID = Userinfo(ID)
        
        newID.save().then(()=>{
            ctx.body={
                code:200,
                message:'插入成功'
            }
        }).catch(error=>{
            cte.body={
                code:500,
                message:error
            }
        })
    } catch {}

})

module.exports = router;