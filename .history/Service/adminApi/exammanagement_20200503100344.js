const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get('/',async (ctx)=>{
    ctx.body='这是examamagement首页'

})
router.post("/insertexaminfo",async(ctx)=>{
  let examinfo = ctx.request.body;
  console.log(examinfo)
  const Exam = mongoose.model("Exam")
  let newExam = Exam(examinfo)
  await newExam.save().then(result=>{
      if(result){
          ctx.body={
              code:200,
              message:result

          }
      }
  }).catch(error=>{
      ctx.body={
          code:500,
          message:error
      }
  })

})

module.exports= router