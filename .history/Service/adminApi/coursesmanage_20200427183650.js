const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose')


router.post('/getcoursesinfo', async (ctx) => {
   
    let page = ctx.request.body.pageindex;
    console.log(page)

    const Courses = mongoose.model('Courses');
    await Courses.find().skip((page-1)*8).limit(8).exec().then(result => {
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

router.post('/changecoursesinfo',async(ctx)=>{
    let data = ctx.request.body.coursesinfo;
    console.log(coursesinfo);
    let _id = coursesinfo._id;
    const Courses =mongoose.model('Courses');
    await Courses.updata({_id:_id},{push:{"COURSE_NAME":data.COURSE_NAME}})

})
module.exports=router