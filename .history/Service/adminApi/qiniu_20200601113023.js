const Router = require('koa-router')
const qiniu = require('qiniu')
let router = new Router();
//获取七牛云上传token
router.get('/qiniuToken',async(ctx)=>{
    // ctx.body="这个是七牛"
    const accessKey = 'GVqmUaM71eMgmgEfm2lWBE8C2m6y3vbaeqNBCILm'
    const secretKey = 'IA_gEbsUGSm-IqMzgM9odGVrX5IsdFLAAHSEPS2j'
    const bucket ='classfile'
    let mac = new qiniu.auth.digest.Mac(accessKey,secretKey);
    let options={
        scope:bucket,
        expires:3600*24
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);
    ctx.body=uploadToken ? {code:200,qiniuToken:uploadToken}:{code:400}
})
//获取图片外链接并存入数据库
router.post('/getimgurl',async(ctx)=>{
    let url = ctx.request.body.imgurl;
    console.log("这个是URL"+url);
    
})

module.exports = router