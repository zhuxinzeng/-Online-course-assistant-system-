const Router =require ('koa-router')
const mongoose= require('mongoose')
let router=new Router();

router.get('/',async(ctx)=>{
    ctx.body='用户操作页面'
})

router.post('/register',async(ctx)=>{
     ctx.body="用户注册接口"
    // console.log('1111')
    // console.log("结果"+ctx.request.body)
    // ctx.body=ctx.request.body
    // ctx.body='路由页面' 
    //取得Model
    // const Courses=mongoose.model("Courses")
    fs.readFile('./data_json/user.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
    const User =mongoose.model('User')
    data.map((value, index) => {
       
        let newUser=User(ctx.request.body)
        await newUser.save().then(()=>{
            ctx.body={
                code:200,
                message:'注册成功'
            }
        }).catch(error=>{
            ctx.body={
                code:500,
                message:error
            }
        })

    })

})


  
    //把从前端接收的POST数据封装成一个新的user对象
   

    //用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    
})
/*登录的实践 */
router.post('/login',async(ctx)=>{
    
    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    // console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
   await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
           //console.log(User)
            //当用户名存在时，开始比对密码
            let newUser = new User()  //因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password,result.password)
            .then(isMatch=>{
                //返回比对结果
                ctx.body={ code:200, message:isMatch} 
            })
            .catch(error=>{
                //出现异常，返回异常
                console.log(error)
                ctx.body={ code:500, message:error}
            })
        }else{
            ctx.body={ code:500, message:'用户名不存在'}
        }

    }).catch(error=>{
        console.log(error)
        ctx.body={ code:500, message:error  }
    })
   
})
module.exports=router;