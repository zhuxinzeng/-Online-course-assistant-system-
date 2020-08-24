const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose')


router.get('/', async (ctx) => {
    ctx.body="这个是课程管理页面"
    // let page = ctx.request.body.pageindex;
    // console.log(page)

    // const Courses = mongoose.model('Courses');
    // await Courses.find().skip(10).limit(10).exec().then(result => {
    //     ctx.body = {
    //         code: 200,
    //         message: result

    //     }
    // }).catch(error => {
    //     ctx.body = {
    //         code: 500,
    //         message: error
    //     }
    // })
})
module.exports=router