<template>
  <div class="EXD-container">
      <div class="Solid"> <a-affix :offsetTop="this.top" ><p id="timer"></p> </a-affix></div>
    <div class="EXD-content">
        <span>考试名称</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../serviceAPI.config";
var maxtime = 10 * 60; // 
      function CountDown() {
        if (maxtime >= 0) {
          minutes = Math.floor(maxtime / 60);
          seconds = Math.floor(maxtime % 60);
          msg = "距离结束还有" + minutes + "分" + seconds + "秒";
          document.all["timer"].innerHTML = msg;
          if (maxtime == 5 * 60)alert("距离结束仅剩5分钟");
            --maxtime;
        } else{
          clearInterval(timer);
          alert("时间到，结束!");
        }
      }
      timer = setInterval("CountDown()", 1000);   
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {
        top: 10,
        examinfo:[]
    };
  },
  mounted() {
         this.getdata()
  },
  methods:{
      getdata(){
     axios({
      url:url.getexamallInfo,
      method:'post',
    }).then(response=>{
        console.log(response);
        if(response.status == 200){
          this.examinfo = response.data.message;
          this.$store.commit('saveExaminfo',this.examinfo)
        
        }
        else
        {
           this.$message.error('服务器端错误！');
        }

    })
   
   }
      
  }
};
</script>
<style scoped>
.EXD-container {
  height: 400px;
}
.EXD-container .Solid{
    position: relative;
    top: 60px;
    left: 80% ;
    width: 100px;
    height: 50px;
    border: 1px solid red;
}
.EXD-container .EXD-content {
  width: 50%;
  height: 70px;
  margin: 10px auto;
  background: #dee3e2;
  border-radius: 10px;
}
</style>