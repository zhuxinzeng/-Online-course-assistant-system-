<template>
  <div class="EXD-container">
    <div class="time">
      <a-affix :offsetTop="this.top">
        <p id="timer"></p>
      </a-affix>
    </div>
    <div class="middle-content">
      <div class></div>
      <div class="EXD-content" v-for="(item,index) in examinfo" :key="index">
       <ExamSubject >33</ExamSubject>
        <!-- </div> -->
      
      </div>
    </div>
    
    <!-- <div class="attention">
      <h3>注意事项:</h3>
      <p>（1）单选题和多选题目选择后需要点击一下确认按钮，点击后本题答案不可更改</p>
      全部答案：{{}}
    </div>-->
  </div>
</template>
<script>
import axios from "axios";
import url from "../serviceAPI.config";
import ExamSubject from '../components/ExamSubject'
export default {
    
  name: "",
  props: [],
  components: { ExamSubject},
  data() {
    return {
      top: 10,
      examinfo: [],
      _id: "",
      number: 1,
      answer: "",
      result: 0,
    //   disabled: false,
      indeterminate: true,
      Disable: false,
      showsure:false,
    };
  },

  mounted() {
   
    this.time();
  },
  methods: {
   

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
    
   
    // onChange(checkedValues) {
    //   console.log("checked = ", checkedValues);
    //   this.answer = [];
    //   this.answer.push(checkedValues);
    //    this.Answer.push((this.answer).toString());
    //    console.log("answer:" + this.answer);

    //   console.log("Answer:" + this.Answer);
    // },
    // saveanswers() {
    //   this.allanswers.push(this.Answer);
    //   let Allanwsers = (this.allanswers).toString();
    //   console.log("这个是Allanswers:" + this.allanswers);
    //   this.$message.success("已提交");
    // }
  }
};
</script>
<style scoped>
.EXD-container {
  display: flex;
  min-width: 1000px;
  justify-content: space-around;
}

.EXD-container .time {
  position: absolute;
  left: 42%;
  width: 160px;
  height: 50px;
  padding: 2px;
  margin-left: 20px;
}
.EXD-container .time p {
  font-size: 16px;
  background: #ffffff;
  box-shadow: 0 0 3px;
  border-radius: 15px;

  margin-top: 30px;
}
.EXD-container .middle-content {
  width: 75%;
  margin: 0 auto;
}
.EXD-container .EXD-content {
  width: 100%;
  height: 400px;
  margin-top: 120px;
  padding: 85px;
  background: #dee3e2;
  border-radius: 10px;
}
.EXD-container .EXD-content .content-option {
  margin-top: 10px;
  padding: 20px;
  height: 180px;
}
.EXD-container .EXD-content .content-option .optionspace {
  margin-top: 20px;
}
.EXD-container .EXD-content .EXD-btn {
  margin-left: 20px;
  box-shadow: 0 0 2px;
}

.EXD-container .EXD-content .EXD-btn p {
  width: 90px;
  margin-left: 10px;
  margin: 0 auto;
}

</style>