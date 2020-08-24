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
    try{
        let _id=ctx.request.body._id;
       
        console.log(_id);
        const adminuser=mongoose.model('Adminuser');
        let result =await adminuser.findOne({_id:_id}).exec()
        ctx.body={code:200,message:result}
    }catch(error){
        ctx.body={code:500,message:error}
    }


})


router.post('/updataadminuserinfo', async (ctx) => {
    let Adminuserinfo = ctx.request.body.userinfo;
    let name = Adminuserinfo.name;
    let pass = Adminuserinfo.pass;
    let job = Adminuserinfo.job;
    let email = Adminuserinfo.email;
    let tel = Adminuserinfo.tel;
    let college = Adminuserinfo.college;
    //    console.log(Adminuserinfo)
    console.log('用户id' + id);
    console.log('用户名' + Adminusername);
    console.log('性别' + sex);
    console.log('专业' + major);
    console.log("学生学号" + studentid);

    const Adminuser = mongoose.model('Adminuser');
    await Adminuser.updateOne({
        _id: id
    }, {
        $set: {
            'AdminuserName': Adminusername,
            'sex': sex,
            'major': major,
            'studentid': studentid
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
router.post('/passwordinfo', async (ctx) => {
    let passwordinfo = ctx.request.body;
    let password = passwordinfo.password;
    let id = passwordinfo._id;
    //    console.log(Adminuserinfo)

    console.log('用户名' + password);


    const Adminuser = mongoose.model('Adminuser');
    await Adminuser.updateOne({
        _id: id
    }, {
        $set: {
            'password': password
        }
    }).then(() => {
        ctx.body = {
            code: 200,
            message: '修改密码成功'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })

})
router.post('/contactinfo', async (ctx) => {
    let contactinfo = ctx.request.body;
    let email = contactinfo.email;
    let tel = contactinfo.tel;
    let id = contactinfo._id;
    //    console.log(Adminuserinfo)

    console.log('邮箱电话信息' + email, tel);


    const Adminuser = mongoose.model('Adminuser');
    await Adminuser.updateOne({
        _id: id
    }, {
        $set: {
            'email': email,
            'tel': tel
        },
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

router.post('/getAdminuserinfo', async (ctx) => {
    let Adminuserinfo = ctx.request.body;
    let id = Adminuserinfo._id;
    //    console.log(Adminuserinfo)

    console.log('用户ID' + id);


    const Adminuser = mongoose.model('Adminuser');
    await Adminuser.findOne({
        _id: id
    }).exec().then(async (result) => {
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


module.exports = router;