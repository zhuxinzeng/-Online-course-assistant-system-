<template>
  <div class="EXD-container">
    <div class="time">
      <a-affix :offsetTop="this.top">
        <p id="timer"></p>
      </a-affix>
    </div>
    <div class="middle-content">
     
      <div class="EXD-content" v-for="(item,index) in examinfo" :key="index">
     <ExamSubject :ques_sequence="item.ques_sequence" :ques_title='item.ques_title' :options_list="item.options_list"></ExamSubject>
        <!-- </div> -->
      </div>
     
    </div>
     <div>
          <a-button @click="getresult()" class="EXD-btn" id="sure" :disabled='showsure'>
            <p >
              <b>确定</b>
            </p>
          </a-button>
          <a-button @click="next()" class="EXD-btn">
            <p @click="getdata()">
              <b>下一题</b>
            </p>
          </a-button>
          {{result}}
          
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
  components: {ExamSubject},
  data() {
    return {
      top: 10,
      examinfo: [],
      _id: "",
      number: 1,
  
    };
  },

  mounted() {
    this.getdata();
   this.next()
    this.time();
  },
  methods: {
    getdata(number) {
        var btn = document.getElementById('sure')
        // btn.disabled=true;
    // console.log("btn:"+btn.checked)
      this.Disable = false;
      number = this.number;
      console.log("这个是number:" + number);
      axios({
        url: url.getexamallInfo,
        method: "post",
        data: {
          number: number
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.examinfo = response.data.message;
          this._id = this.examinfo[0]._id;
          this.$store.commit("saveExaminfo", this.examinfo);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.showsure = false;
     
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
    },  next() {
    
    // console.log("btn:"+btn.checked)
      this.number++;
      console.log(this.number);
    },
 
    clearchencked(){
         this.checked = true;
    }
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
 
.EXD-container .EXD-content .EXD-btn {
  margin-left: 20px;
  box-shadow: 0 0 2px;
}

  
 .EXD-container .EXD-content .EXD-btn p {
  width: 90px;
  margin-left: 10px;
  margin: 0 auto;
}
 .attention {
  width: 18%;
  margin-top: 20px;
}
 .attention h3 {
  color: red;
}
</style>