<template>
  <div class="DD-container">
    <div class="top">
      <h3>专业资料</h3>
      <div v-for="(item,index) in datainfo" :key="index">
        <span>{{item.Dataname}}</span>
        <span>{{item.Datadescribe}}</span>
        
        <el-link
          target="_blank"
          :href="item.fileurl"
          :underline="false"
          style="margin-left:15px"
        >
         <el-button type="success" icon="el-icon-check" size="mini" circle></el-button>
        </el-link>
        <span></span>
      </div>

      <span></span>
    </div>
    <div class="center">
      <h3>通用资料</h3>
    </div>
    <div class="bottom">
      <h3>其他</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "DataDownload",
  data() {
    return {
      datainfo: [
        {
          Dataname: "java",
          Datadescribe: "javatest",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/分数-C-.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("../../assets/user-style/DataDownload.css");
</style>