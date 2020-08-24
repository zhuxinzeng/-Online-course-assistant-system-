<template>
  <div class="EXD-container">
    <div class="Solid">
      <a-affix :offsetTop="this.top">
        <p id="timer"></p>
      </a-affix>
    </div>
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
      examinfo: []
    };
  },

  mounted() {
    this.getdata();
    this.time();
  },
  methods: {
    getdata() {
      axios({
        url: url.getexamallInfo,
        method: "post"
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.examinfo = response.data.message;
          this.$store.commit("saveExaminfo", this.examinfo);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
    },

    time() {
      let time = 2 * 60 * 60;
      let timer = document.getElementById("timer");
      let Timer = setInterval(function() {
        time--;
        let h = Math.floor(time/3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time%60;
        let msg = "距考试时间结束还有:" +  h + "小时" + m + "分钟" + s + "秒";
        timer.innerHTML = msg;
      },1000);
    }
  }
};
</script>
<style scoped>
.EXD-container {
  height: 400px;
}
.EXD-container .Solid {
  position: relative;
  top: 60px;
  left: 80%;
  width: 180px;
  height: 50px;
  padding: 2px;
  border: 1px solid red;
}
.EXD-container .Solid p{
    font-size: 14px;
}
.EXD-container .EXD-content {
  width: 50%;
  height: 70px;
  margin: 10px auto;
  background: #dee3e2;
  border-radius: 10px;
}
</style>