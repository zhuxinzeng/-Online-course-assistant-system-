<template>
  <div class="wrapper">
    <vHead></vHead>
     <v-sidebar></v-sidebar>
    <div class="box">
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

left:200px;
width: 90%;
border: 1px solid red;
}
.content {
    position: absolute;

  width: 1300px;
  min-width: 800px;
  border: 1px solid red;
}
</style>