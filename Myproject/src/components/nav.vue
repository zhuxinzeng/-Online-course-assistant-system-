<template>
  <div class="nav">
  
    <div class="logo">
      <img src="../assets/image/logo.png" alt />
    </div>
      <div class="btn-fullscreen" @click="handleFullScreen">
      <a-tooltip  placement="bottom">
        <template slot="title">全屏</template>
      <a-icon type="fullscreen" />
      </a-tooltip>
    </div>
    <div class="info">
      <div class="avatar-info">
      
          <img :src="avatar" alt />
      
      </div>
      <div class="dropdown"  >
   <span> <p>{{userInfo}}</p></span>
  <div class="dropdown-content">
    <p @click="loginout()">退出</p>
  </div>
    </div>
    </div>
  </div>
</template>

<script>
import url from "../serviceAPI.config";
import axios from "axios";

export default {
  name: "",
  props: "",

  data() {
    return {
      userInfo: "",
      fullscreen: false,
      avatar:''
    };
  },
  created() {
    this.userInfo = this.$store.state.userName;
    this.userInfo = sessionStorage.getItem("userName");
    this.getavatarurl();
  },
  methods: {
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },
    getavatarurl(){
      axios({
        url:url.getuseravatarurl,
        method:'post',
        data:{
          _id:sessionStorage.getItem("userid")
        }
      }).then(response=>{
        console.log(response)
        if(response.data.code == 200){
          this.avatar=response.data.message[0].avatar;
        }
      })
    },
    loginout(){
      this.$router.push('/login')
    }
  }
};
</script>

<style>
@import url("../assets/user-style/nav.css");
</style>