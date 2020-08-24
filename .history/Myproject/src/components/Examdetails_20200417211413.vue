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
        {{item.ques_sequence}}
        {{item.ques_title}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
          <a-row>
            <a-col :span="12" class="optionspace">
              <a-checkbox value="A" @change="onChange">A.{{item.options_list[0].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox value="B" @change="onChange">B.{{item.options_list[1].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox value="C" @change="onChange">C.{{item.options_list[2].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox value="D" @change="onChange">D.{{item.options_list[3].options_title}}</a-checkbox>
            </a-col>

            <a-button class="EXD-btn" @click="next">
              <p @click="getdata()"><span >下一题</span> </p>
            </a-button>
          <a-button @click="getresult()">获取正确答案</a-button> {{result}} 
            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          </a-row>
        </div>
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
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {
      top: 10,
      examinfo: [],
      _id:"",
      number: 1,
      answer:'',
      result:'',
      disabled: false,
      indeterminate: true
    };
  },

  mounted() {
    this.getdata();
    this.next();
    this.time();
  },
  methods: {
    getdata(number) {
      number = this.number;
      console.log("这个是number:" + number);
      axios({
        url: url.getexamallInfo,
        method: "post",
        data: { 
          number: number,
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.examinfo = response.data.message;
        this._id=this.examinfo[0]._id
          this.$store.commit("saveExaminfo", this.examinfo);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
    },
    getresult(){
       console.log("得到成绩的_id："+this._id)
       console.log("得到成绩的answer："+this.answer)
      axios({ 
        url: url.getresult,
        method: "post",
        data: {
            _id:this._id,
          answer:this.answer
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
        this.result=response.data.message;
         this.$message.success('后台传回_'+this.result)
        //   this.$store.commit("saveExaminfo", this.examinfo);
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
      console.log("这个是选中的值为 = ", checkedValues.target.value);
      this.answer = checkedValues.target.value;
      console.log("这个是answer:" + this.answer);
    },

    next() {
      this.number++;
      console.log(this.number);

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
}
.EXD-container .EXD-content .content-option .optionspace {
  margin-top: 20px;
}
.EXD-container .EXD-content .EXD-btn {
  width: 150px;
  height: 37px;
  margin-top: 50px;
}
.EXD-container .EXD-content .EXD-btn p {
  margin: 0 auto;
}
.EXD-container .attention {
  width: 18%;
  margin-top: 20px;
}
.EXD-container .attention h3 {
  color: red;
}
</style>