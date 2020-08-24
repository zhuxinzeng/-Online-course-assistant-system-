<template>
  <div class="DD-container">
    <div class="top">
      <h3>专业资料</h3>
      <div class="content">
      <div class="rowdata" v-for="(item,index) in datainfo" :key="index">
        <span>{{item.Dataname}}</span> <span>|</span> <span style="font-size:1px">{{item.Datadescribe}}</span>
        <span>
        <el-link
          target="_blank"
          :href="item.fileurl"
          :underline="false"
          style="margin-left:15px;"
        >
         <el-button type="warning" icon="el-icon-download" size="mini" circle></el-button>
        </el-link>
        </span>
        
      </div>
      </div>
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
          Datadescribe: "胡呼呼呼呼是堂的",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "这个是java的资料",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "javatest",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "javatest",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },
          {
          Dataname: "java",
          Datadescribe: "javatest",
          fileurl: "http://q9ojmk5ld.bkt.clouddn.com/upload_pic_%E6%AF%95%E8%AE%BE%E8%A6%81%E6%B1%82.rtf"
        },

      ]
    };
  }
};
</script>

<style scoped>
@import url("../../assets/user-style/DataDownload.css");
</style>