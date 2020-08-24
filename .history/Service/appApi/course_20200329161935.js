const Router=require('koa-router');
let router=new Router();

const mongoose=require('mongoose');
const fs=require('fs');

router.get('/insertCoursesInfo',async(ctx)=>{
    fs.readFile('./data_json/courses.json','utf8',(err,data)=>{
        data=JSON.parse(data);
        let saveCount=0;
        const Courses=mongoose.model('Courses');
        data.map((value,index)=>{
            console.log(value);
            let newCourses=new Courses(value);
            newCourses.save().then(()=>{
                saveCount++;
                console.log('成功'+saveCount)
            }).catch(error=>{
                console.log(MediaStreamErrorEvent)
            })

        })

    })
    ctx.body='开始导入数据'
})