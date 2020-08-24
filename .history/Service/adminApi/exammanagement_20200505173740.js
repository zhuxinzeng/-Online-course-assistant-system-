const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
router.get('/', async (ctx) => {
    ctx.body = '这是examamagement首页'

})
//用户端获取全部考试信息  
router.post('/getexamallinfo', async (ctx) => {

    let Number = ctx.request.body.number;
    console.log("这个是number:" + Number)
    const Exam = mongoose.model('Exam')

    await Exam.find().skip(Number - 1).limit(1).exec().then(result => {
        console.log(result)
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
//用户端计算正确答案
router.post('/getexamresult', async (ctx) => {

    try {
        let answer = ctx.request.body.answer;
        let answergroup = ctx.request.body.answergroup;
        let _id = ctx.request.body._id;
        console.log("这个是answer:" + answer)
        let Answergroup = answergroup.sort().toString()
        console.log('这个是Answergroup：' + Answergroup)
        console.log("这个是_id:" + _id)
        const Exam = mongoose.model('Exam')

        await Exam.findOne({
            _id: _id
        }).exec().then(async (result) => {
            if (result) {
                let isMatch = result.correctanswer;

                console.log('数据库正确的答案：' + isMatch)
                if (answer == isMatch || Answergroup == isMatch) {
                    let results = 10;

                    ctx.body = {
                        code: 200,
                        message: results
                    }
                } else {
                    ctx.body = {
                        code: 200,
                        message: 0
                    }

                }
            }
        })
    } catch (error) {
        ctx.body = {
            code: 500,
            message: error
        }
    }
})

//新增考试信息
router.post("/insertexaminfo", async (ctx) => {
    let examinfo = ctx.request.body.examinfo;
    console.log(examinfo)
    const Exam = mongoose.model("Exam")
    let newExam = Exam(examinfo)
    await newExam.save().then(result => {
        if (result) {
            ctx.body = {
                code: 200,
                message: result
            }
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })

})
//获取考试信息
router.post('/getexaminfo', async (ctx) => {
    let page = ctx.request.body.pageindex;
    console.log(page)
    // .skip((page - 1) * 8).limit(8).
    const Exam = mongoose.model('Exam');
    await Exam.find({
        examtime: 120
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
//删除考试信息
router.post('/deleteexaminfo', async (ctx) => {
    let name = ctx.request.body.examname;
    console.log(name);
    const Exam = mongoose.model('Exam');
    await Exam.deleteOne({
        examname: name
    }).then(result => {
        ctx.body = {
            code: 200,
            message: '删除考试成功！'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })
})
//新增考试选项 
router.post('/addexamoptionsinfo', async (ctx) => {
    try {
        let examinfo = ctx.request.body.examoptions;
        // console.log(examinfo)
        let examname = examinfo.examname;
        let ques_sequence = examinfo.ques_sequence
        let ques_title = examinfo.ques_title
        let Topictypes = examinfo.Topictypes
        let correctanswer = examinfo.correctanswer
        let options_list = new Array();
        if (examinfo.options_list_a) {
            options_list.push(examinfo.options_list_a)
        }
        if (examinfo.options_list_b) {
            options_list.push(examinfo.options_list_b)
        }
        if (examinfo.options_list_c) {
            options_list.push(examinfo.options_list_c)
        }
        if (examinfo.options_list_d) {
            options_list.push(examinfo.options_list_d)
        }
        const Exam = mongoose.model('Exam')
        let newExam = Exam({
                examname: examname,
                options_list: options_list,
                ques_sequence: ques_sequence,
                ques_title: ques_title,
                Topictypes: Topictypes,
                correctanswer: correctanswer
            }
        );
        await newExam.save().then(result => {
            ctx.body = {
                code: 200,
                message: result
            }
        })
    } catch (error){
        ctx.body = {
            code: 500,
            message: error
        }
    }
})
//编辑考试信息
router.post('/editexaminfo', async (ctx) => {
    let knowledgenfo = ctx.request.body.knowledgenfo;
    let _id = knowledgenfo._id;
    let Checkname = knowledgenfo.Checkname;
    let Checkscore = knowledgenfo.Checkscore;
    let Checknumber = knowledgenfo.Checknumber;
  
    console.log(knowledgenfo);
    const Test = mongoose.model('Test')
    await Test.updateOne({
      _id: _id
    }, {
      $set: {
        "Checkname": Checkname,
        "Checkscore": Checkscore,
        "Checknumber": Checknumber
      }
    }).then(result=>{
      ctx.body={
        code:200,
        message:result
      }
    }).catch(error=>{
      ctx.body={
        code:500,
        message:result
      }
    })
  })

//获取添加考试选项信息
router.post('/getexamoptionsinfo', async (ctx) => {
    // .skip((page - 1) * 8).limit(8).
    const Exam = mongoose.model('Exam');
    await Exam.find({
        examname: "Java"
    }).exec().then(result => {
        console.log(result)
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
module.exports = router