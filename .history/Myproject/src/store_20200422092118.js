import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    // 登陆时保存用户完整信息
    saveUser(state, userName) {
      state.userName = userName;
      // localStorage.setItem("userName", JSON.stringify(userName));
      sessionStorage.setItem('userName',userName);
      console.log('Vuex端存储' + userName);
      console.log('sessionstorage存储' + localStorage.getItem("userName"));

    },
    saveUserid(state, userid) {
      state.userid = userid;
      // localStorage.setItem('userid', JSON.stringify(userid));
      sessionStorage.setItem('userid',userid)
      console.log('Vuex端存储' + userid);
      console.log('sessionstorage存储' + localStorage.getItem("userid"));

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


  },
  actions: {

  }
})
