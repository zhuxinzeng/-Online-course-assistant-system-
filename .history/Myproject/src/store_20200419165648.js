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
      localStorage.setItem("userName", JSON.stringify(userName));
      console.log('Vuex端存储' + userName);
      console.log('本地存储' + localStorage.getItem("userName"));

    },
    saveUserid(state, userid) {
      state.userid = userid;
      localStorage.setItem('userid', JSON.stringify(userid))
      console.log('Vuex端存储' + userid);
      console.log('本地存储' + localStorage.getItem("userid"));

    },
    saveExaminfo(state, examSingleinfo) {
      state.examSingleinfo = examSingleinfo;
      localStorage.setItem("examSingleinfo", JSON.stringify(examSingleinfo))

    },
    savegrade(state,grade) {
      state.grade=grade;
      

    }

  },
  actions: {

  }
})