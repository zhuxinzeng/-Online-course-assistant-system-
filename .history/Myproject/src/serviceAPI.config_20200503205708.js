const LOCALURL = "http://localhost:3000/"
const URL = {
  //用户端
  registerUser: LOCALURL + 'user/register', //用户注册接口
  login:LOCALURL+'user/login',   //用户注册接口
  useressentialinfo:LOCALURL+'user/essentialinfo',  //用户修改基础信息
  passwordinfo:LOCALURL+"user/passwordinfo",   //用户密码修改
  contactinfo:LOCALURL+'user/contactinfo',   //用户电话邮箱修改
  getuserinfo:LOCALURL+"user/getuserinfo",   //得到用户信息
  getcoursesallInfo:LOCALURL+'courses/getCourseallInfo', //得到课程的全部信息
  getcourseInfo:LOCALURL+'courses/getCourseInfo',    //得到课程详情信息
  useridinsert:LOCALURL+'courses/useridinsert',  //j将用户ID插入课程表中
  getmycourses:LOCALURL+'courses/getmycourses',  //得到我的课程
  deletemycourses:LOCALURL+"courses/deletemycourses",  //删除我的课程
  gethomeworkinfo:LOCALURL+'task/getalltask',  //得到作业信息
  getexamallInfo:LOCALURL+'question/getquestionallInfo' ,//得到考试的全部信息
  getresult:LOCALURL+'question/getresult', //得到成绩
  insertresult:LOCALURL+'result/insertresult', //将成绩插入数据库
  getTestinfo:LOCALURL+'Test/getTestinfo',    //得到知识检测的信息
  getTestresult:LOCALURL+'Test/getTestresult' ,  //得到知识测试的答案


  //管理端
  adminregister:LOCALURL+'adminuser/register', //管理端注册
  adminlogin:LOCALURL+'adminuser/login',       //管理端登录
  getstudentinfo:LOCALURL+'user/getalluserinfo',    //获取全部的用户信息
  updatauserinfo:LOCALURL+'user/updatauserinfo',    //更新用户信息
  deleteuserinfo:LOCALURL+'user/deleteuserinfo',    //删除个人用户
  getcoursesinfo:LOCALURL+'coursesmanage/getcoursesinfo',  //获取全部课程信息
  changecoursesinfo:LOCALURL+"coursesmanage/changecoursesinfo" ,  //编辑课程  
  addcourseinfo:LOCALURL+'coursesmanage/addcourseinfo',  //新增课程
  addtaskinfo:LOCALURL+"task/inserttask",                    //新增作业
  gettaskinfo:LOCALURL+'task/gettask',                  //查看作业信息
  edittaskinfo:LOCALURL+'task/edittaskinfo',         //编辑作业信息
  deletetaskinfo:LOCALURL+'task/deletetaskinfo',     // 删除作业信息
  deletecoursesinfo:LOCALURL+'coursesmanage/deletecoursesinfo', //删除课程
  getstudentresult:LOCALURL+'result/getstudentresult', //查看学生考试成绩
  addexaminfo:LOCALURL+'exammanagement/insertexaminfo' ,   //新增考试
  deleteexaminfo:LOCALURL+'exammanagement/deleteexaminfo', //删除考试
  getexaminfo:LOCALURL+'exammanagement/getexaminfo',    //获取考试信息
  addexamoptionsinfo:LOCALURL+'exammanagement/addexamoptionsinfo', //增加考试选项
}

module.exports = URL
