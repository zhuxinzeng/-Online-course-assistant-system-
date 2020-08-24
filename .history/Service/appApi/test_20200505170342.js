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
//新增知识检测
router.post("/addKnowledgeinfo", async (ctx) => {
  let Knowledgeinfo = ctx.request.body.Knowledgeinfo;
  console.log(Knowledgeinfo)
  const Test = mongoose.model("Test")
  let newTest = Test(Knowledgeinfo)
  await newTest.save().then(result => {
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
//得到知识检测的全部信息
router.post('/getKnowledgeinfo', async (ctx) => {
  let page = ctx.request.body.pageindex;
  console.log(page)
  // .skip((page - 1) * 8).limit(8).
  const Test = mongoose.model('Test');
  await Test.find({
    Checknumber: 100
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
//编辑知识检测信息

router.post('/editknowledgeinfo', async (ctx) => {
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
//获取知识检测信息
router.post('/getTestinfo', async (ctx) => {
  let Testname = ctx.request.body.Testname;
  // console.log(Testname)
  const Test = mongoose.model('Test');
  await Test.find({
    Testname: Testname
  }).exec().then(async (result) => {
    // console.log(result)
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
//新增考试选项 
router.post('/addeknowledegoptionsinfo', async (ctx) => {
  try {
      let knowledegoptions = ctx.request.body.knowledegoptions;
      console.log(knowledegoptions)
      let Testname = knowledegoptions.Testname;
      let Testtitle = knowledegoptions.Testtitle
      let Topictypes = knowledegoptions.Topictypes
      let correctanswer = knowledegoptions.correctanswer
      let options_list = new Array();
      if (knowledegoptions.options_list_a) {
          options_list.push(knowledegoptions.options_list_a)
      }
      if (knowledegoptions.options_list_b) {
          options_list.push(knowledegoptions.options_list_b)
      }
      if (knowledegoptions.options_list_c) {
          options_list.push(knowledegoptions.options_list_c)
      }
      if (knowledegoptions.options_list_d) {
          options_list.push(knowledegoptions.options_list_d)
      }
      const Test = mongoose.model('Test')
      let newTest = Test({
              Testname: Testname,
              options_list: options_list,
              Testtitle: Testtitle,
              Topictypes: Topictypes,
              correctanswer: correctanswer
          }
      );
      await newTest.save().then(result => {
          ctx.body = {
              code: 200,
              message: result
          }
      })
  } catch(error) {
      ctx.body = {
          code: 500,
          message: error
      }
  }
})
//得到检测成绩
router.post('/getTestresult', async (ctx) => {
  try {
    let answersgroup = ctx.request.body.answersgroup;
    let Topictypes = "答案合集"
    console.log("前台传过来的数据" + answersgroup)

    const Test = mongoose.model("Test");
    await Test.findOne({
      Topictypes: Topictypes
    }).exec().then(async (result) => {

      let isMatch = result.answersgroup;
      // console.log('这个是isMatch'+isMatch)
      let results = 0;
      console.log("__________isMatch________________" + isMatch.length)
      console.log("__________answersgroup________________" + answersgroup.length)
      for (i = 0, len = isMatch.length; i < len; i++) {

        console.log("这个是数据库遍历的答案" + isMatch[i].answer)
        console.log("这个前台遍历的答案-----" + answersgroup[i])

        if (isMatch[i].answer == answersgroup[i]) {
          results += 10
          console.log(results)
        }
      }
      console.log("最终的结果：" + results)

      ctx.body = {
        code: 200,
        message: results
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