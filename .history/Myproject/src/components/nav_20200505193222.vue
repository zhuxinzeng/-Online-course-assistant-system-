<template>
  <div class="nav">
    <div class="btn-fullscreen" @click="handleFullScreen">
      <a-tooltip placement="bottom">
        <template slot="title">全屏</template>
        <a-icon type="fullscreen" />
      </a-tooltip>
    </div>
    <div class="logo">
      <img src="../assets/image/logo.png" alt />
    </div>
    <div class="info">
      <div class="avatar-info">
        <a href>
          <img src="../assets/image/头像.jpg" alt />
          <a-dropdown-button @click="handleButtonClick">
            Dropdown
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                <a-icon type="user" />退出
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="user" />个人信息
              </a-menu-item>
             
            </a-menu>
          </a-dropdown-button>
          <p>{{userInfo}}</p>
        </a>
      </div>
      <a href class="news">
        <img src="../assets/image/消息.png" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: "",

  data() {
    return {
      userInfo: "",
      fullscreen: false
    };
  },
  created() {
    this.userInfo = this.$store.state.userName;
    this.userInfo = sessionStorage.getItem("userName");
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
  }
};
</script>

<style>
@import url("../assets/user-style/nav.css");

.nav .btn-fullscreen {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 11%;
  margin-left: 20px;
  margin-top: 2px;
  color: aliceblue;
  font-size: 24px;
}
</style>