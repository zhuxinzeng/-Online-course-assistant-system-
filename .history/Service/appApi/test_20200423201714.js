const Router = require('koa-router');
const mongoose = require('mongoose');
let router = new Router();

router.get('/',async(ctx)=>{
    ctx.body='这个是Test页面'
})
//获取考试信息
router.post('/getTestinfo', async(ctx)=>{
  let 

})

module.exports = router;