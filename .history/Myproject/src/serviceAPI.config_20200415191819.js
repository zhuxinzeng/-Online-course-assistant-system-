const LOCALURL = "http://localhost:3000/"
const URL = {
  
  registerUser: LOCALURL + 'user/register', //用户注册接口
  login:LOCALURL+'user/login',   //用户注册接口
  getcoursesallInfo:LOCALURL+'courses/getCourseallInfo', //得到课程的全部信息
  getcourseInfo:LOCALURL+'courses/getCourseInfo',    //得到课程详情信息
  courseidinsert:LOCALURL+'user/courseidinsert',  //将课程ID插入用户表中
  getexamallInfo:LOCALURL+'question/getquestionallInfo' //得到考试的全部信息
}

module.exports = URL
