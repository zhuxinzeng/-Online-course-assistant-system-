const Router = require('koa-router');
const mongoose = require('mongoose');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是Test页面'
})
//获取知识检测信息
router.post('/getTestinfo', async (ctx) => {
  let testname = ctx.request.body;
  console.log( ctx.request.body)
  const Test = mongoose.model('Test');
  await Test.find({
    Testname: testname
  }).exec().then(async(result)=>{
    ctx.body={
      code:200,
      message:result
    }
  }).catch(error=>{
    ctx.body={
   code:500,
   message:'服务器端错误！'
    }
  })


})
module.exports = router