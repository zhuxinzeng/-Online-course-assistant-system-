<template>
  <div class="EXD-container">
    <div class="EXD-nav"></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted() {
         this.getdata()
  },
  method:{
      
  }
};
</script>
<style scoped>
.EXD-container {
  height: 400px;
}
.EXD-container .EXD-nav {
  width: 95%;
  height: 70px;
  margin: 10px auto;
  background: #dee3e2;
  border-radius: 10px;
}
</style>