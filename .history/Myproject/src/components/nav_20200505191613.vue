<template>
  <div class="nav">
    <div class="btn-fullscreen" @click="handleFullScreen">
      <a-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
      <a-icon type="fullscreen"  />
      </a-tooltip>
    </div>
    <div class="logo">
      <img src="../assets/image/logo.png" alt />
    </div>
    <div class="info">
      <div class="avatar-info">
        <a href>
          <img src="../assets/image/头像.jpg" alt />
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
    }
  }
};
</script>

<style>
@import url("../assets/user-style/nav.css");

.nav .btn-fullscreen{
  width: 500px;
  height: 50px;
  color: aliceblue;
  position:absolute;
  right: 15%;
  border: 1px solid red;
}
</style>