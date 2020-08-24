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
      sessionStorage.setItem('userName',userName);
      console.log('Vuex端存储' + userName);
      console.log('sessionstorage存储' + sessionStorage.getItem("userName"));

    },
    saveUserid(state, userid) {
      state.userid = userid;
      localStorage.setItem('userid', JSON.stringify(userid));
      sessionStorage.setItem('userid',userid)
      console.log('Vuex端存储' + userid);
      // console.log('localtorage存储' + JSON.parse(localStorage.getItem('userid')));
    },
    saveUseremail(state,email){
      state.email = this.email;
      sessionStorage.setItem('email',email)
    },
    saveUsertel(state,tel){
      state.tel = this.tel;
      sessionStorage.setItem('tel',tel)
    },
    savestudentid(state,studentid){
      state.studentid = studentid;
      sessionStorage.setItem("studentid",studentid)

    },
    saveexamSingleinfo(state, examSingleinfo) {
      state.examSingleinfo = examSingleinfo;
      // localStorage.setItem("saveexamSingleinfo", JSON.stringify(examSingleinfo))
      sessionStorage.setItem('saveexamSingleinfo',saveexamSingleinfo)

    },
    saveexamJudge(state,examJudge){
      state.examJudge = examJudge;
      // localStorage.setItem("saveexamJudge", JSON.stringify(examJudge))
      sessionStorage.setItem("saveexamJudge", examJudge)


    },
    saveexamMultiple(state,examMultiple){
      state.examMultiple = examMultiple;
      // localStorage.setItem("saveexamMultiple", JSON.stringify(examMultiple))
      sessionStorage.setItem("saveexamMultiple", examMultiple)

    },
    savegrade(state,grade) {
      state.grade=grade;
    },
    //管理端
  saveAdminuser(state,adminusername){
    state.adminusername=adminusername;
sessionStorage.setItem("adminusername", adminusername)
    console.log('Vuex端存储' + adminusername);
    console.log('sessionStorage存储' + sessionStorage.getItem("adminusername"));
  }

  },
  actions: {

  }
})
