const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();

router.get('/', async (ctx) => {
    ctx.body = '这个是task页面'
})
//得到作业信息
router.post('/getalltask', async (ctx) => {
    let taskname = ctx.request.body.taskname;
    let page = ctx.request.body.pagenumber;
    console.log(page);
    console.log(taskname)
    const Task = mongoose.model('Task')
    await Task.find().skip((page - 1) * 1).limit(1).then(result => {
       if(result){
        ctx.body = {
            code: 200,
            message: result
        }
       }else{
        ctx.body = {
            code: 200,
           
        }   
       }
       
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
//用户端发送学生答案
router.post('/postanswers', async (ctx) => {
    let answer = ctx.request.body.answer;
    let sequence = ctx.request.body.tasksequence;
    console.log(answer)
   console.log(sequence)
    const Task = mongoose.model('Task')
    await Task.updateOne({
        Tasksequence: sequence
    }, {
        $set: {
            "Studentanswer": answer
        }
    }).exec().then(result => {
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
    await Task.find().skip((pageNumber - 1) * 8).limit(8).then(result => {
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
    const Task = mongoose.model('Task');
    await Task.updateOne({
        _id: _id
    }, {
        $set: {
            "Taskname": data.Taskname,
            "Tasksequence": data.Tasksequence,
            "Tasktitle": data.Tasktitle,
            "Taskanswer": data.Taskanswer,
        }
    }).then(result => {
        ctx.body = {
            code: 200,
            message: "修改成功！"
        }
    })
})

//删除作业信息
router.post('/deletetaskinfo', async (ctx) => {
    let name = ctx.request.body.Taskname;
    console.log(name);
    const Task = mongoose.model('Task');
    await Task.deleteOne({
        Taskname: name
    }).then(result => {
        ctx.body = {
            code: 200,
            message: '删除课程成功！'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
module.exports = router;