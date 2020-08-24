const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/', async (ctx) => {
    ctx.body = '用户操作页面'
})

router.post('/register', async (ctx) => {
    ctx.body = "用户注册接口"
    // console.log('1111')
    // console.log("结果"+ctx.request.body)
    // ctx.body=ctx.request.body
    // ctx.body='路由页面' 
    //取得Model
    // const Courses=mongoose.model("Courses")
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
router.post('/courseidinsert', async (ctx) => {

    let courseid = ctx.request.body._id;
    let userid = ctx.request.body.userid
    console.log('这个是userid：'+userid)
    const User = mongoose.model('User')
    // console.log(User)
    // let courseid=Courseid
await User.findOne({
    _id:userid
}).exec().then(async(result)=>{
   console.log('这个是查找存在的用户'+result)
   console.log('这个是用户的courseid'+result.courseid)
   if(result){
   
// result.insertMany([{courseid:courseid}], function(err){
//     ctx.body = {
//         code: 500,
//         message: err
//     }
//  })
//     console.log('这个是result'+result)
    await result.save().then(() => {
        ctx.body = {
            code: 200,
            message:result
        }

    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
   }else{
       ctx.body={
           code:500,
           message:'用户名不存在'
       }
   }

})

})

router.post('/essentialinfo', async(ctx)=>{
    let userName = ctx.request.body.userName;
    let sex = ctx.request.body.sex;
    let major = ctx.rewuest.body.major;
    let studentid = ctx.request.body.studentid;

    console.log('用户名'+userName);
    console.log('性别'+sex);
    console.log('专业'+major);
    console.log("学生信息"+studentid);

})



module.exports = router;