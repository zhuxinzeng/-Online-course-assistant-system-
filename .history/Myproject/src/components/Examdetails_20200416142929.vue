<template>
  <div class="EXD-container">
      <div class="Solid"> <a-affix :offsetTop="this.top" >考试倒计时</a-affix></div>
    <div class="EXD-content">
        <span>考试名称</span>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../serviceAPI.config";
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