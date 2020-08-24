<template>
  <div class="wrapper">
    <vHead></vHead>
    <div class="box">
          <v-sidebar></v-sidebar>
      <div class="content">
        <el-button>222</el-button>3333
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
.box{
    display: flex;
width: 90%;
border: 1px solid red;
}
.content {
   width: 1200px;
  border: 1px solid red;
}
</style>