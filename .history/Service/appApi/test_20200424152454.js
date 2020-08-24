const Router = require('koa-router');
const mongoose = require('mongoose');
const fs = require('fs');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是Test页面'
})
//导入知识检测
router.get('/insertTestinfo', async (ctx) => {
  fs.readFile('./data_json/Test.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    let saveCount = 0;
    const Test = mongoose.model('Test');
    data.map((value, index) => {
      // console.log(value);
      let newTest = new Test(value);
      newTest.save().then(() => {
        saveCount++;
        console.log('成功' + saveCount)
      }).catch(error => {
        console.log(MediaStreamErrorEvent)
      })

    })

  })
  ctx.body = '开始导入数据'
})
//获取知识检测信息
router.post('/getTestinfo', async (ctx) => {
  let Testname = ctx.request.body.Testname;
  // console.log(Testname)
  const Test = mongoose.model('Test');
  await Test.find({
    Testname: Testname
  }).exec().then(async (result) => {
    console.log(result)
    ctx.body = {
      code: 200,
      message: result
    }
  }).catch(error => {
    ctx.body = {
      code: 500,
      message: '服务器端错误！'
    }
  })
})

router.post('/getTestresult', async (ctx) => {
  try {
    let answersgroup = ctx.request.body.answersgroup;
    let correctanswer =1
    // console.log("前台传过来的数据"+answersgroup)

    const Test = mongoose.model("Test");
    await Test.findOne({correctanswer:correctanswer}).exec().then(async (result) => {
      // console.log("正确的答案"+result.answersgroup)
      if (result) {
        let isMatch = result.answersgroup;
        for(i<0,len=isMatch.length;i<len;i++){
            for(j<0,len=answersgroup.length;j<len;j++){
              console.log("这个是数据库遍历的答案"+isMatch[i])
              console.log(['这个是前台传回的数据：'+answersgroup[j]])

            }

        }
        // console.log("数据库中正确的答案："+isMatch);
      
        //   ctx.body = {
        //     code: 200,
        //     message: results
          
        // }
      }
    })

  } catch (error) {

    ctx.body = {
      code: 500,
      message: error
    }
  }
})
module.exports = router