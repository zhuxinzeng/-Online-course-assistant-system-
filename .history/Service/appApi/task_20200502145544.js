const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/', async (ctx) => {
    ctx.body = '这个是task页面'
})
//新增作业信息
router.post('/inserttask', async (ctx) => {
    let taskinfo = ctx.request.body.taskinfo;
    console.log(taskinfo)
    const Task = mongoose.model('Task')
    let newTask = Task(taskinfo)
    await newTask.save().then(result => {
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
//查看作业信息
router.post('/gettask', async (ctx) => {
    let page = ctx.request.body;
    console.log(page);
    let pageNumber = page.pageindex;
    const Task = mongoose.model('Task')
    await Task.find().skip((pageNumber-1)*8).limit(8).then(result => {
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

//编辑作业信息
router.post('/edittaskinfo', async (ctx) => {
    let data = ctx.request.body.taskinfo;
    console.log(data);
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
module.exports = router;