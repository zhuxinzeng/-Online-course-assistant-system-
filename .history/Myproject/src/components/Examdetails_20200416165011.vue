<template>
  <div class="EXD-container">
    <div class="Solid">
      <a-affix :offsetTop="this.top">
        <p id="timer"></p>
      </a-affix>
    </div>
    <div class="middle-content">
    <div class="EXD-content" v-for="(item,index) in examinfo" :key="index">
      {{item.ques_sequence}}
      {{item.ques_title}}
      <!-- {{item.options_list}} -->
      <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
      <a-checkbox-group @change="onChange">
        <a-row>
          <a-col :span="12">
            <a-checkbox value="A">A.{{item.options_list[0].options_title}}</a-checkbox>
          </a-col>
          <a-col :span="12">
            <a-checkbox value="B">B.{{item.options_list[0].options_title}}</a-checkbox>
          </a-col>
          <a-col :span="12">
            <a-checkbox value="C">C.{{item.options_list[0].options_title}}</a-checkbox>
          </a-col>
          <a-col :span="12">
            <a-checkbox value="D">D.{{item.options_list[0].options_title}}</a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>

      <!-- </div> -->
    </div>
    </div>
    <div class="resultlist">第一题：{{this.checkedValues}}</div>
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
        let h = Math.floor(time / 3600);
        let H = Math.floor(h / 10);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        let msg =
          "------距考试结束------" + H + h + "小时" + m + "分钟" + s + "秒-";
        timer.innerHTML = msg;
      }, 1000);
    },
    onChange(checkedValues) {
      console.log("checked = ", checkedValues);
    }
  }
};
</script>
<style scoped>
.EXD-container {
display: flex;
justify-content: space-around;
border: 1px solid red;
}
.EXD-container .Solid {
 
  width: 160px;
  height: 50px;
  padding: 2px;
  border: 1px solid red;
}
.EXD-container .Solid p {
  font-size: 16px;
}
.EXD-container .middle-content{
   width: 70%;
 
}
.EXD-container .EXD-content {
border: 1px solid red;
  width: 100%;
    margin: 20px;
  padding: 20px;
  background: #dee3e2;
  border-radius: 10px;
}
.EXD-container .resultlist {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>