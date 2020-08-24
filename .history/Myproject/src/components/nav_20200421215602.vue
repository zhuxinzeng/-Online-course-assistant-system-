<template>
  <div class="nav">
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
   
  },
  methods: {}
};
</script>

<style>
@import url("../assets/user-style/nav.css");
</style>