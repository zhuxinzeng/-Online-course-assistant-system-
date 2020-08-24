<template>
  <div class="EXD-container">
    <div class="time">
      <a-affix :offsetTop="this.top">
        <span>距离考试结束还有</span>
        <p id="timer"></p>
      </a-affix>
    </div>
    <div class="middle-content">
      <div v-show="showSingleinfo" class="EXD-content"  v-for="(item,index) in examSingleinfo"    :key="index"
         >
        ({{item.Topictypes}})
        {{item.ques_sequence}}
        {{item.ques_title}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
          <a-row>
            <a-radio-group>
              <a-col :span="10" class="optionspace">
                <a-radio
                  value="A"
                  @change="onChange"
                  :disabled="Disable"
                >A.{{item.options_list[0].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace">
                <a-radio
                  value="B"
                  @change="onChange"
                  :disabled="Disable"
                >B.{{item.options_list[1].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace" v-if="item.options_list[2].options_title">
                <a-radio
                  value="C"
                  @change="onChange"
                  :disabled="Disable"
                >C.{{item.options_list[2].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace" v-if="item.options_list[3].options_title">
                <a-radio
                  value="D"
                  @change="onChange"
                  :disabled="Disable"
                >D.{{item.options_list[3].options_title}}</a-radio>
              </a-col>
            </a-radio-group>

            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          </a-row>
        </div>
        <div>
          <a-button @click="getresult()" class="EXD-btn" id="sure" :disabled="showsure">
            <p>
              <b>确定</b>
            </p>
          </a-button>
          <a-button @click="next" class="EXD-btn" :disabled="shownextbtn">
            <p @click="getdata()">
              <b>下一题</b>
            </p>
          </a-button>
          {{result}}
        </div>
        </div>
      <div class="EXD-content" v-for="(item,index) in examMultiple" :key="index+2">
        ({{item.Topictypes}})
        {{item.ques_sequence}}
        {{item.ques_title}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
           <a-checkbox-group @change="Change">
            <a-row>
            <a-col :span="10" class="optionspace"><a-checkbox value="A" :disabled="Disable">A.{{item.options_list[0].options_title}}</a-checkbox></a-col>
            <a-col :span="10" class="optionspace"><a-checkbox value="B" :disabled="Disable">B.{{item.options_list[1].options_title}}</a-checkbox></a-col>
            <a-col :span="10" class="optionspace"><a-checkbox value="C" :disabled="Disable">C.{{item.options_list[2].options_title}}</a-checkbox></a-col>
            <a-col :span="10" class="optionspace"><a-checkbox value="D" :disabled="Disable">D.{{item.options_list[3].options_title}}</a-checkbox></a-col>
            </a-row>
           </a-checkbox-group>
          
            <!-- <a-checkbox-group @change="Change()">
                <a-row>
              <a-col :span="10" class="optionspace">
                <a-checkbox
                  value="A"
                  :disabled="Disable"
                >A.{{item.options_list[0].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="10" class="optionspace">
                <a-checkbox
                  value="B"
                 
                  :disabled="Disable"
                >B.{{item.options_list[1].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="10" class="optionspace">
                <a-checkbox
                  s
                  value="C"
                 
                  :disabled="Disable"
                >C.{{item.options_list[2].options_title}}</a-checkbox>
              </a-col>
              <a-col :span="10" class="optionspace">
                <a-checkbox
                  s
                  value="D"
                 
                  :disabled="Disable"
                >D.{{item.options_list[3].options_title}}</a-checkbox>
              </a-col>
              </a-row>
            </a-checkbox-group> -->

            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          
        </div>
        <div>
          <a-button @click="getresult()" class="EXD-btn" id="sure" :disabled="showsure">
            <p>
              <b>确定</b>
            </p>
          </a-button>
          <a-button @click="next" class="EXD-btn" :disabled="shownextbtn">
            <p @click="getdata()">
              <b>下一题</b>
            </p>
          </a-button>
          {{result}}
        </div>
        </div>
      <div v-show="showJudge" class="EXD-content" v-for="(item,index) in examJudge" :key="index+1">
        ({{item.Topictypes}})
        {{item.ques_sequence}}
        {{item.ques_title}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
          <a-row>
            <a-radio-group>
              <a-col :span="10" class="optionspace judge">
                <a-radio
                  
                  value="A"
                  @change="onChange"
                  :disabled="Disable"
                >A.{{item.options_list[0].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace judge">
                <a-radio
                  value="B"
                  @change="onChange"
                  :disabled="Disable"
                >B.{{item.options_list[1].options_title}}</a-radio>
              </a-col>
            </a-radio-group>

            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          </a-row>
        </div>
        <div>
          <a-button @click="getresult()" class="EXD-btn" id="sure" :disabled="showsure">
            <p>
              <b>确定</b>
            </p>
          </a-button>
          <a-button @click="next" class="EXD-btn" :disabled="shownextbtn">
            <p @click="getdata()">
              <b>下一题</b>
            </p>
          </a-button>
          
          {{result}}
        </div>
         </div>

        <div></div>
       </div>

 
    <div class="Submitpaper">
      <a-button class="submitbtn"  @click="showModal" :disabled="Showsubmit">交卷</a-button>
      <a-modal title="本次考试成绩：" v-model="showmodel" @ok="hideModal" okText="确认" cancelText="取消">
      <p style="font-size:10px;margin-left:50px">{{result}}分</p>
    
      </a-modal>
      <br />
      <br />
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
      examSingleinfo: [],
      examJudge: [],
      examMultiple: [],
      exam: [],
      _id: "",
      number: 1,
      answer: "",
      answergroup:[],
      result: 0,
      //   disabled: false,
      indeterminate: true,
      Disable: false,
      showsure: false,
      showSingleinfo: true,
      showJudge: true,
       showmodel: false,
       Showsubmit:true,
       shownextbtn:false
    };
  },

  mounted() {
    this.getdata();
    this.next();
    this.time();
  },
  methods: {
    getdata(number) {
      var btn = document.getElementById("sure");
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
      
         if(
            response.status == 200 &&
          response.data.message == ""
        ){
            this.info();
            this.Showsubmit = false;
            // this.$message.success('考试结束！')
        }else if (
          response.status == 200 &&
          response.data.message[0].Topictypes == "单选题"
        ) {
          //     this.exam =response.data.message;
          //    console.log("这个是单选题"+this.exam)
          this.examSingleinfo = response.data.message;
          this._id = this.examSingleinfo[0]._id;
          this.$store.commit("saveexamSingleinfo", this.examSingleinfo);
        } else if (
          response.status == 200 &&
          response.data.message[0].Topictypes == "判断题"
        ) {
          this.showSingleinfo = false;
          this.examJudge = response.data.message;
          this._id = this.examJudge[0]._id;
          this.$store.commit("saveexamJudge", this.examJudge);
        } else if (
          response.status == 200 &&
          response.data.message[0].Topictypes == "多选题"
        ) {
          this.showJudge = false;
          this.examMultiple = response.data.message;
          this._id = this.examMultiple[0]._id;
          this.$store.commit("saveexamMultiple", this.examMultiple);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.showsure = false;
    },

    getresult() {
      console.log("得到成绩的_id：" + this._id);
      console.log("得到成绩的answer：" + this.answer);
      axios({
        url: url.getresult,
        method: "post",
        data: {
          _id: this._id,
          answer: this.answer,
          answergroup:this.answergroup
          
        }
      }).then(response => {
        console.log(response);
        console.log("后台成绩："+response);
        if (response.status == 200) {
          this.grade = response.data.message;
          this.result = this.result + this.grade;
          //   this.$message.success("后台传回_" + this.grade);
          this.$store.commit("savegrade", this.grade);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.Disable = true;
      this.showsure = true;
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
        let msg = H + h + "小时" + m + "分钟" + s + "秒";
        timer.innerHTML = msg;
      }, 1000);
    },
    onChange(checkedValues) {
      console.log("这个是选中的值为 = ", checkedValues.target.value);
      this.answer = checkedValues.target.value;
      console.log("这个是answer:" + this.answer);
      console.log(`checked = ${checkedValues.target.checked}`);
    },
    Change(checkedValues) {
        this.answergroup = checkedValues;
      console.log('checkgroup = ', checkedValues);
    },


    next() {
      // console.log("btn:"+btn.checked)
      this.shownextbtn = true
    setTimeout(() => {
     this.shownextbtn = false
    
    }, 2000)
       this.number++;
      console.log(this.number);
    },
    clearchencked() {
      this.checked = true;
    },
       info() {
      const h = this.$createElement;
      this.$info({
        title: '考试完成，请点击交卷按钮完成考试',
        onOk() {},
      });
    },
     showModal() {
      this.showmodel = true;
    },
    hideModal() {
      this.showmodel = false;
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
  width: 210px;
  height: 60px;
  padding: 2px;
  margin-top: 40px;
  box-shadow: 0 0 3px;
  border-radius: 15px;
}
.EXD-container .time span {
  margin-left: 20%;
}
.EXD-container .time p {
  font-size: 16px;
  margin-top: 5px;
  margin-left: 17%;
  background: #ffffff;
}
.EXD-container .middle-content {
  width: 78%;
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
  width: 50%;
}
.EXD-container .EXD-content .content-option .optionspace .judge {
  margin-top: 20px;

  width: 50%;
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
.EXD-container .Submitpaper{
    position:absolute;;
    width: 100px;
    height: 50px;
  
   top: 40px;
   right: 11%;
}
.EXD-container .Submitpaper .submitbtn{
   
    width: 100px;
    height: 30px;
  
  
}
</style>