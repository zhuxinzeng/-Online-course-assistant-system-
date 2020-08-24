const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get('/',async (ctx)=>{
    ctx.body='这是examamagement首页'

})
router.post("/insertexaminfo",async(ctx)=>{
  let examinfo = ctx.request.body;
  console.log(examinfo)

})

module.exports= router