// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'; //蚂蚁金服UI
import ElementUI from 'element-ui'; //饿了么UI
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import * as qiniu from "qiniu-js";

Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(animated)
vue.use(qiniu)
Vue.config.productionTip = false
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',  
}))


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
