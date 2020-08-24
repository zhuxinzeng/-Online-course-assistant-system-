import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    //用户端
    // 登陆时保存用户完整信息
    saveUser(state, userName) {
      state.userName = userName;
      // localStorage.setItem("userName", JSON.stringify(userName));
      sessionStorage.setItem('userName', userName);
      console.log('Vuex端存储' + userName);
      console.log('sessionstorage存储' + sessionStorage.getItem("userName"));

    },
    //用户ID
    saveUserid(state, userid) {
      state.userid = userid;
      localStorage.setItem('userid', JSON.stringify(userid));
      sessionStorage.setItem('userid', userid)
      console.log('Vuex端存储' + userid);
      // console.log('localtorage存储' + JSON.parse(localStorage.getItem('userid')));
    },
    //用户邮箱
    saveUseremail(state, email) {
      state.email = this.email;
      sessionStorage.setItem('email', email)
    },
    //用户电话
    saveUsertel(state, tel) {
      state.tel = this.tel;
      sessionStorage.setItem('tel', tel)
    },
    //用户学号
    savestudentid(state, studentid) {
      state.studentid = studentid;
      sessionStorage.setItem("studentid", studentid)
      console.log("vuex存储" + studentid)
      console.log("sessionStorage存储studenid" + sessionStorage.getItem("studentid"))

    },
    //单选题信息
    saveexamSingleinfo(state, examSingleinfo) {
      state.examSingleinfo = examSingleinfo;
      // localStorage.setItem("saveexamSingleinfo", JSON.stringify(examSingleinfo))
      sessionStorage.setItem('examSingleinfo', examSingleinfo)

    },
    //判断题信息
    saveexamJudge(state, examJudge) {
      state.examJudge = examJudge;
      // localStorage.setItem("saveexamJudge", JSON.stringify(examJudge))
      sessionStorage.setItem("examJudge", examJudge)


    },
    //多选题信息
    saveexamMultiple(state, examMultiple) {
      state.examMultiple = examMultiple;
      // localStorage.setItem("saveexamMultiple", JSON.stringify(examMultiple))
      sessionStorage.setItem("examMultiple", examMultiple)

    },
    //课程名称
    saveSubjectname(state,subjectname){
      state.subjectname = subjectname;
      sessionStorage.setItem("subjectname",subjectname)
    },
    //考试成绩
    savegrade(state, grade) {
      state.grade = grade;
    },
    saveMajor(state,major){
      state.major = major;
      sessionStorage.setItem("major",major)
    },
    //管理端
    saveAdminuser(state, adminusername) {
      state.adminusername = adminusername;
      sessionStorage.setItem("adminusername", adminusername)
      console.log('Vuex端存储' + adminusername);
      console.log('sessionStorage存储' + sessionStorage.getItem("adminusername"));
      localStorage.setItem("adminusername", JSON.stringify(adminusername));
    },
    saveAdminuserid(state, adminuser_id) {
      state.adminuser_id = adminuser_id;
      sessionStorage.setItem("adminuser_id", adminuser_id)
      console.log('Vuex端存储adminuserid' + adminuser_id);
      console.log('sessionStorage存储adminuserid' + sessionStorage.getItem("adminuser_id"));
    }

  },
  actions: {

  }
})
