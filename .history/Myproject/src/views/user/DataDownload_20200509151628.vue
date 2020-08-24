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
import axios from "axios";
import url from '../../serviceAPI.config'
export default {
  name: "DataDownload",
  data() {
    return {
      datainfo: [
      ]
    };
  },
 mounted(){
    this.getmajordata();
    
  },
  methods:{
    getmajordata(){
      axios({
        url:url.getuploaddata,
        method:"post",
        data:{
          category:'专业资料'
        }
        
      }).then(response=>{
        console.log(response)
   if(response.data.code == 200 ){
     
      this.datainfo = response.data.message;
     
   }
      })
    }

  }
};
</script>

<style scoped>
@import url("../../assets/user-style/DataDownload.css");
</style>