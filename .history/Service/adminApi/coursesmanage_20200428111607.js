const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose')

//获得全部的课程信息
router.post('/getcoursesinfo', async (ctx) => {

    let page = ctx.request.body.pageindex;
    console.log(page)

    const Courses = mongoose.model('Courses');
    await Courses.find().skip((page - 1) * 8).limit(8).exec().then(result => {
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
//编辑课程信息
router.post('/changecoursesinfo', async (ctx) => {
    let data = ctx.request.body.coursesinfo;
    console.log(data.COURSE_NAME);
    let _id = data._id;
    const Courses = mongoose.model('Courses');
    await Courses.updateOne({
        _id: _id
    }, {
        $set: {
            "COURSE_NAME": data.COURSE_NAME,
            "COURSE_CREDIT": data.COURSE_CREDIT,
            "COURSE_ROOM": data.COURSE_ROOM,
            "COURSE_NUMBER": data.COURSE_NUMBER,
            "COURSE_START": data.COURSE_START,
            "COURSE_END": data.COURSE_END,
            "COURSE_ATTRIBUTE": data.COURSE_ATTRIBUTE,
            "COURSE_TESTTIME": data.COURSE_TESTTIME,
            "TEACHER_NAME":data.TEACHER_NAME
        }
    }).then(result => {
        ctx.body = {
            code: 200,
            message: "修改成功！"
        }
    })

})
//新增课程信息
router.post('/addcourseinfo',async(ctx)=>{
    let Courseinfo = ctx.request.body.courseinfo;
    console.log(Courseinfo);

    const Courses = mongoose.model("Courses");
    let newCourseinfo = Courses(Courseinfo);
    await newCourseinfo.save().then(result=>{
      ctx.body={
          code:200,
          message:"新增课程成功！"
      }

    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
})

router.post('/deletecoursesinfo', async(ctx)=>{
    let  name = ctx.request.body.name;
    console.log(_id);
    const Courses = mongoose.model('Courses');
    await Courses.deleteOne({COURSE_NAME:name}).then(result=>{
        ctx.body={
            code:200,
            message:'删除课程成功！'
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
    })
})
module.exports = router