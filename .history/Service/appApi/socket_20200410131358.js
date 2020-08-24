const Router = require('koa-router');
let router = new Router();

const mongoose = require('mongoose');



router.get('/b', function (ctx, next) {

    ctx.body = {
    //   code: 200,
    "nihao"
    //   query: ctx.query,
    //   querystring: ctx.querystring,
    //   params: ctx.params,
    //   request: ctx.request
    }
  });
  
  
  router.post('/signin', function (ctx, next) {
    ctx.body = {
      code: 200,
      query: ctx.query,
      querystring: ctx.querystring,
      params: ctx.params,
      request: ctx.request,
      postParam: ctx.request.body //post请求参数获取
    }
  });
  
  module.exports = router