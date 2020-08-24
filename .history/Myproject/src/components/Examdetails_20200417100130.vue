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
        <div class="content-option">
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="12">
                <a-checkbox value="A">A.{{item.options_list[0].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="B">B.{{item.options_list[1].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="C">C.{{item.options_list[2].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="12">
                <a-checkbox value="D">D.{{item.options_list[3].options_title}}</a-checkbox>
              </a-col>
              <a-button @click="saveanswers" class="EXD-btn">确定</a-button>
            </a-row>
          </a-checkbox-group>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="attention">
      <h3>注意事项:</h3>
      <p>（1）单选题和多选题目选择后需要点击一下确认按钮，点击后本题答案不可更改</p>
      全部答案：{{Allanswers}}
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
      examinfo: [],
      answer: [],
      allanswers: [],
      Answer: [],
      Allanswers: []
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
      this.answer = [];
      this.answer.push(checkedValues);
      let Answer= this.answer;
       console.log("answer:" + this.answer);
     
      console.log("Answer:" + this.Answer);
    },
    saveanswers() {
      this.allanswers.push(this.Answer);
      let Allanwsers = (this.allanswers).toString();
      console.log("这个是Allanswers:" + this.allanswers);
      this.$message.success("已提交");
    }
  }
};
</script>
<style scoped>
.EXD-container {
  display: flex;
  min-width: 1000px;
  justify-content: space-around;
}
.EXD-container .EXD-btn {
  margin-top: 20px;
}
.EXD-container .Solid {
  width: 160px;
  height: 50px;
  padding: 2px;

  margin-left: 20px;
}
.EXD-container .Solid p {
  font-size: 16px;
  background: #eef9bf;
  box-shadow: 0 0 3px;
  border-radius: 25%;

  margin-top: 30px;
}
.EXD-container .middle-content {
  width: 65%;
}
.EXD-container .EXD-content {
  width: 100%;
  height: 400px;
  margin: 20px;
  padding: 20px;
  background: #dee3e2;
  border-radius: 10px;
}
.EXD-container .EXD-content .content-option {
  margin-top: 10px;
}
.EXD-container .attention {
  width: 18%;
  margin-top: 20px;
}
.EXD-container .attention h3 {
  color: red;
}
</style>