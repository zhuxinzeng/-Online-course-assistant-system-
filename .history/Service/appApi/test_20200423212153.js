const Router = require('koa-router');
const mongoose = require('mongoose');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是Test页面'
})
//获取知识检测信息
router.post('/getTestinfo', async (ctx) => {
  let Testname = ctx.request.body.Testname;
  console.log( Testname)
  const Test = mongoose.model('Test');
  await Test.find({
    Testname: Testname
  }).exec()
  ctx.body={
    code:200,
    message:result
  }


})
module.exports = router