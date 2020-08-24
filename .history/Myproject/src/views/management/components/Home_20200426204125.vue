<template>
  <div class="wrapper">
    <vHead></vHead>
    <div class="box">
      <v-sidebar></v-sidebar>
      <div class="content">
        
      </div>
    </div>
  </div>
</template>
<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import bus from "./bus";
export default {
  data() {
    return {
      collapse: false
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags
  },
  created() {}
};
</script>
<style >
.wrapper {
  width: 100%;
  height: 100%;
}
.box {
  display: flex;
  width: 2000px;
  width: 100%;
}
.content {
  width: 1700px;
}
</style>