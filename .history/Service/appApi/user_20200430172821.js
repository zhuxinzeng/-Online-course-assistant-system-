const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/', async (ctx) => {
    ctx.body = '用户操作页面'
})

router.post('/register', async (ctx) => {
    // ctx.body = "用户注册接口"
    const User = mongoose.model('User')
    console.log(User)
    //把从前端接收的POST数据封装成一个新的user对象
    let newUser = User(ctx.request.body)
    console.log(newUser)
    //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: newUser._id
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
/*登录的实践 */
router.post('/login', async (ctx) => {

    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    // console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
    await User.findOne({
        userName: userName
    }).exec().then(async (result) => {
        console.log(result)
        if (result) {
            //console.log(User)
            //当用户名存在时，开始比对密码
            let newUser = new User() //因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    //返回比对结果
                    ctx.body = {
                        code: 200,
                        message: result
                    }
                })
                .catch(error => {
                    //出现异常，返回异常
                    console.log(error)
                    ctx.body = {
                        code: 500,
                        message: '密码错误'
                    }
                })
        } else {
            ctx.body = {
                code: 500,
                message: '用户名不存在或者密码错误'
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
/*获取用户ID */
router.post('/getuserid', async (ctx) => {

    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    // console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
    await User.findOne({
        userName: userName
    }).exec().then(async (result) => {
        console.log(result)
        if (result) {
            //console.log(User)
            //当用户名存在时，开始比对密码
            let newUser = new User() //因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    //返回比对结果
                    ctx.body = {
                        code: 200,
                        message: "登录成功"
                    }
                })
                .catch(error => {
                    //出现异常，返回异常
                    console.log(error)
                    ctx.body = {
                        code: 500,
                        message: error
                    }
                })
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
//修改基础信息
router.post('/essentialinfo', async (ctx) => {
    let userinfo = ctx.request.body;
    let id = userinfo._id;
    let username = userinfo.username;
    let sex = userinfo.sex;
    let major = userinfo.major;
    let studentid = userinfo.studentid;
    //    console.log(userinfo)
    console.log('用户id' + id);
    console.log('用户名' + username);
    console.log('性别' + sex);
    console.log('专业' + major);
    console.log("学生学号" + studentid);

    const User = mongoose.model('User');
    await User.updateOne({
        _id: id
    }, {
        $set: {
            'userName': username,
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
//修改密码信息
router.post('/passwordinfo', async (ctx) => {
    let passwordinfo = ctx.request.body;
    let password = passwordinfo.password;
    let id = passwordinfo._id;
    //    console.log(userinfo)

    console.log('用户名' + password);


    const User = mongoose.model('User');
    await User.updateOne({
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
//修改联系信息
router.post('/contactinfo', async (ctx) => {
    let contactinfo = ctx.request.body;
    let email = contactinfo.email;
    let tel = contactinfo.tel;
    let id = contactinfo._id;
    //    console.log(userinfo)

    console.log('邮箱电话信息' + email, tel);


    const User = mongoose.model('User');
    await User.updateOne({
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


//获取全部用户信息 
router.post('/getalluserinfo', async (ctx) => {
    try {
        let page = ctx.request.body;
        console.log(page);
        let pageNumber = page.pageindex;
        // console.log(pageNumber);
        const user = mongoose.model('User');
        let result = await user.find().skip((pageNumber - 1) * 8).limit(8).exec()
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
//得到个人信息
router.post('/getuserinfo', async (ctx) => {
    let userinfo = ctx.request.body;
    let id = userinfo._id;
    //    console.log(userinfo)

    console.log('用户ID' + id);


    const User = mongoose.model('User');
    await User.findOne({
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
//管理端修改用户信息
router.post('/updatauserinfo', async (ctx) => {
    try {
        let userinfo = ctx.request.body.userinfo;
        let id = userinfo._id;
        console.log(id);
        const User = mongoose.model('User')
        let result = await User.find({
            _id: id
        }, {
            $set: {
                "studentid": userinfo.studentid,
                "userName": userinfo.userName,
                "sex": userinfo.sex,
                "major": userinfo.major,
                "email": userinfo.email
            }
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

module.exports = router;