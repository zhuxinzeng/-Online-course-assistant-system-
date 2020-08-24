const Router = require('koa-router');
let router = new Router();

const mongoose = require('mongoose');
const fs = require('fs');

//导入课程详细数据
router.get('/insertCoursesInfo', async (ctx) => {
    fs.readFile('./data_json/courses.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let saveCount = 0;
        const Courses = mongoose.model('Courses');
        data.map((value, index) => {
            console.log(value);
            let newCourses = new Courses(value);
            newCourses.save().then(() => {
                saveCount++;
                console.log('成功' + saveCount)
            }).catch(error => {
                console.log(MediaStreamErrorEvent)
            })

        })

    })
    ctx.body = '开始导入数据'
})
//获取课程全部信息
router.post('/getCourseallInfo',async(ctx)=>{
    try{
        let page=ctx.request.body;
        // console.log(page);
        let pageNumber=page.pageNumber;
        // console.log(pageNumber);
        const Courses=mongoose.model('Courses');
        let result =await Courses.find().skip((pageNumber-1)*8).limit(8).exec()
        ctx.body={code:200,message:result}
    }catch(error){
        ctx.body={code:500,message:error}
    }

    
})
//获取课程详情信息的接口
router.post('/getCourseInfo', async (ctx) => {
    try {
        let _id = ctx.request.body.__id;
        const Courses = mongoose.model('Courses');
        // console.log(_id);
        let result = await Courses.findOne({
            _id:_id
        }).exec();
        ctx.body = {
            code: 200,
            message: result
        };
    } catch (error) {
        ctx.body = {
            code: 500,
            message: error
        }
    }
})

module.exports = router