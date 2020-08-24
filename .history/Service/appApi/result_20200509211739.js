const Router = require('koa-router');
const mongoose = require('mongoose');
const fs = require('fs');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是result页面'
})
//学生成绩录入
router.post('/insertresult', async (ctx) => {
  let userinfo = ctx.request.body;

  const Result = mongoose.model('Result')
  let newResult = Result(userinfo)

  await newResult.save({}).then(result => {
    console.log(newResult)
    ctx.body = {
      code: 200,
      message: '成功'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})
//学生评价更新
router.post('/updateRate', async (ctx) => {
  let name = ctx.request.body.name;
  let medal = ctx.request.body.medal;
  console.log(medal)
  console.log(name)
  const Result = mongoose.model('Result')


  await Result.updateOne({
    name: name
  }, {
    $set: {
      medal: medal
    }
  }).then(result => {
    ctx.body = {
      code: 200,
      message: '成功'
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: error
    }
  })
})
//得到学生成绩
router.post('/getstudentresult', async (ctx) => {
  try {
    const Result = mongoose.model("Result")
    await Result.find().exec().then(result => {
      console.log(result)
      ctx.body = {
        code: 200,
        message: result
      }
    })
  } catch (error) {
    ctx.body = {
      code: 500,
      message: error
    }
  }


})
module.exports = router
