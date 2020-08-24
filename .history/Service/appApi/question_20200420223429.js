const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router();
const fs = require('fs');
router.get('/',async (ctx)=>{
    ctx.body='这是question首页'

})
router.get('/insertquestionInfo', async (ctx) => {
    fs.readFile('./data_json/question.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let saveCount = 0;
        const Question = mongoose.model('Question');
        data.map((value, index) => {
            console.log(value);
            let newQuestion = new Question(value);
            newQuestion.save().then(() => {
                saveCount++;
                console.log('成功' + saveCount)
            }).catch(error => {
                console.log(MediaStreamErrorEvent)
            })

        })

    })
    ctx.body = '开始导入数据'
})
//获得题目信息
router.post('/getquestionallInfo', async (ctx) => {
    try {
        let Number = ctx.request.body.number;

        console.log("这个是number:" + Number)
        const question = mongoose.model('Question')

        let result = await question.find().skip(Number - 1).limit(1).exec()
       
        // console.log(result)
        ctx.body = {
            code: 200,
            message: result
        }


    } catch (error) {
        ctx.body = {
            code: 500,
            message: error
        }

    }
})

//计算正确答案
router.post('/getresult', async (ctx) => {
 
    try { 

        let answer = ctx.request.body.answer;
        let answergroup = ctx.request.body.answergroup;
        let _id = ctx.request.body._id;
        
        console.log("这个是answer:" + answer)
        let Answergroup = answergroup.sort().toString()
        console.log('这个是Answergroup：'+Answergroup)
        console.log("这个是_id:" + _id)
        const question = mongoose.model('Question')

        await question.findOne({
            _id: _id
        }).exec().then(async (result) => {
            if (result) {
                let isMatch = result.correctanswer;
                
               console.log('数据库正确的答案：'+isMatch)
                if ( Answergroup == isMatch) {
                    let results=10;
                 
                    ctx.body = {
                        code: 200,
                        message: results
                    }
                } else {
                    ctx.body = {
                        code: 200,
                        message: '无成绩'
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

module.exports = router;