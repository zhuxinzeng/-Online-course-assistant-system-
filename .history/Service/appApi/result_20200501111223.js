const Router = require('koa-router');
const mongoose = require('mongoose');
const fs = require('fs');
let router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '这个是Test页面'
})
//导入知识检测
router.get('/insertresultinfo', async (ctx) => {
  fs.readFile('./data_json/result.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    let saveCount = 0;
    const Result = mongoose.model('Result');
    data.map((value, index) => {
      // console.log(value);
      let newResult = new Result(value);
      newResult.save().then(() => {
        saveCount++;
        console.log('成功' + saveCount)
      }).catch(error => {
        console.log(MediaStreamErrorEvent)
      })

    })

  })
  ctx.body = '开始导入数据'
})