const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get("/",async(ctx)=>{
    ctx.body="这个是dataupload页面"
})




module.exports = router;