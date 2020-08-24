const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'admin操作页面'
})
//注册用户
router.post('/register', async (ctx) => {
    let userinfo = ctx.request.body.ruleForm;

    const Adminuser = mongoose.model('Adminuser')
    console.log(userinfo)
    //把从前端接收的POST数据封装成一个新的Adminuser对象
    let newAdminuser = Adminuser(userinfo)
    //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newAdminuser.save().then((result) => {
        ctx.body = {
            code: 200,
            message: result
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
//登录的实践 
router.post('/login', async (ctx) => {

    //得到前端传递过来的数据
    let userinfo = ctx.request.body
    // console.log(userinfo)
    let name = userinfo.name
    let pass = userinfo.pass

    //引入Adminuser的model
    const Adminuser = mongoose.model('Adminuser')
    //查找用户名是否存在，如果存在开始比对密码
    await Adminuser.findOne({
        name: name
    }).exec().then(async (result) => {
        // console.log(result)
        if (result) {
            if (pass == result.pass) {
                ctx.body = {
                    code: 200,
                    message: result
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '密码错误'
                }
            }
        } else {
            ctx.body = {
                code: 500,
                message: '用户名不存在'
            }
        }
    }).catch(error => {
        console.log(error)
        ctx.body = {
            code: 500,
            message: error
        }
    })

})
//获取全部用户信息 
router.post('/getadminuserinfo', async (ctx) => {
    try {
        let _id = ctx.request.body._id;

        console.log(_id);
        const adminuser = mongoose.model('Adminuser');
        let result = await adminuser.findOne({
            _id: _id
        }).exec()
        ctx.body = {
            code: 200,
            message: result
        }
    } catch (error) {
        ctx.body = {
            code: 500,
            message: error
        }
    }
})
//更新用户信息
router.post('/updataadminuserinfo', async (ctx) => {
    let Adminuserinfo = ctx.request.body.userinfo;
    let _id = ctx.request.body._id;
    let name = Adminuserinfo.name;
    let pass = Adminuserinfo.pass;
    let job = Adminuserinfo.job;
    let email = Adminuserinfo.email;
    let tel = Adminuserinfo.tel;
    let college = Adminuserinfo.college;
    //    console.log(Adminuserinfo)
    console.log(_id)
    console.log(name);
    console.log(pass);
    console.log(job);
    console.log(email);
    console.log(tel);
    console.log(college);
    const Adminuser = mongoose.model('Adminuser');
    await Adminuser.updateOne({
        _id: _id
    }, {
        $set: {
         "name":name,
         "pass":pass,
         "email":email,
         "tel":tel,
        "job":job,
        "college":college
        }
    }).then(() => {
        ctx.body = {
            code: 200,
            message: '修改成功'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
//上传并更新头像链接
router.post('/getimgurl',async(ctx)=>{
    let url = ctx.request.body.imgurl;
    let _id = ctx.request.body._id;
    console.log("这个是URL"+url);
    console.log(_id)
    const adminuser = mongoose.module('Adminuser')
    await adminuser.updateOne({_id:_id},{$set:{avatar:url}})
    
})
module.exports = router;