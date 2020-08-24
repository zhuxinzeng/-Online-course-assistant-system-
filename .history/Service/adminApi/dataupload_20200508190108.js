const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get("/",async(ctx)=>{
    ctx.body="这个是dataupload页面"
})

router.post("/senduploaddata",async(ctx)=>{
    let data = ctx.request.body.data;
    let fileurl = ctx.request.body.fileurl;
    console.log(data);
    console.log(fileurl);
    const Dataupload = mongoose.model("Dataupload");
    let newDataupload = Dataupload({data,})
    await newDataupload.save().then(resulr=>{
        ctx.body={
            code:200,
            message:"上传成功！"
        }
    })
})



module.exports = router;