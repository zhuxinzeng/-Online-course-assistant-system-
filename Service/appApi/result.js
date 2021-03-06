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
  let _id = ctx.request.body._id;
  let medal = ctx.request.body.medal;
  let evaluate = ctx.request.body.evaluate;
  console.log(medal)
  console.log(_id)
  console.log(evaluate)
  const Result = mongoose.model('Result')
  await Result.updateOne({
    _id: _id
  }, {
    $set: {
      medal: medal,
      evaluate: evaluate
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
//得到徽章数据
router.post('/getrate',async(ctx)=>{
  let name = ctx.request.body.name;
  const result = mongoose.model('Result')
  await result.find({name:name}).exec().then(result=>{
    ctx.body={
      code:200,
      message:result
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
