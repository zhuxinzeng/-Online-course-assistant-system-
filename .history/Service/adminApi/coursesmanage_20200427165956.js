const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose')


router.post('/getcoursesinfo', async (ctx) => {
   
    let page = ctx.request.body.pageindex;
    console.log(page)

    const Courses = mongoose.model('Courses');
    await Courses.find().skip(page-1).limit(10).exec().then(result => {
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
module.exports=router