const Router = require('koa-router');
const mongoose = require('mongoose');
let router = new Router();

router.get('/',async(ctx)=>{
    ctx.body='这个是Test页面'
})
//获取考试信息
router.post('/getTestinfo', async(ctx)=>{
  let testname = ctx.request.body;
  const Test = mongoose.model('Test');
  await Test.find({Testname:testname}).exec().then(async (result)=>{
   ctx.body={
     code:200,
     message:result
   }

  })

})

module.exports = router;