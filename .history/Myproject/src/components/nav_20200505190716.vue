<template>
  <div class="nav">
    <div class="btn-fullscreen" @click="handleFullScreen">
          <a-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
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
      userInfo: ""
    };
  },
  created() {
    this.userInfo = this.$store.state.userName;
    this.userInfo = sessionStorage.getItem('userName');
  },
  methods: {}
};
</script>

<style>
@import url("../assets/user-style/nav.css");
</style>