<template>
  <div class="T-container">
    <div v-for="(item,index) in Test" :key="index">
      {{index+1}} ({{item.Topictypes}})
      {{item.Testsequence}}
      {{item.Testtitle}}
      <!-- {{item.options_list}} -->
      <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
      <div class="content-option">
        <a-row>
          <a-radio-group>
            <a-col :span="10" class="optionspace">
              <a-radio value="A" @change="onChange">A.{{item.options_list[0].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="B" @change="onChange">B.{{item.options_list[1].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace" v-if="item.options_list[2].options_title">
              <a-radio value="C" @change="onChange">C.{{item.options_list[2].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace" v-if="item.options_list[3].options_title">
              <a-radio value="D" @change="onChange">D.{{item.options_list[3].options_title}}</a-radio>
            </a-col>
          </a-radio-group>

          <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
          </a-button>-->
        </a-row>
      </div>
      <div>
        <a-button class="EXD-btn" @click="addanswersgroup()">
          <p>
            确定
          </p>
        </a-button>
        {{result}}
      </div>
    </div>
    <div class="submitbtn">
        <a-button>交卷</a-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serviceAPI.config";
export default {
  name: "",
  components: {},
  data() {
    return {
      Test: [],
      Testname: "Javascript",
      answer:'',
      answersgroup: [],
      result: ""
    };
  },
  created() {
    axios({
      url: url.getTestinfo,
      method: "post",
      data: {
        Testname: this.Testname
      }
    }).then(response => {
      console.log(response);
      if (response.status == 200) {
        this.Test = response.data.message;
      }
    });
  },
  methods: {
    onChange(checkedValues) {
      console.log("这个是选中的值为 = ", checkedValues.target.value);
      this.answer = checkedValues.target.value;
      console.log("这个是answer:" + this.answer);
      console.log(`checked = ${checkedValues.target.checked}`);
    },
    addanswersgroup(){
        let answersgroup =this.answersgroup;
        let answer = this.answer;
        answersgroup.push(answer);
        console.log('这个是答案合集'+answersgroup);
    },
    getresult() {
      axios({
        url: url.getTestresult,
        method: "post",
        data: {
          answersgroup: this.answersgroup
        }
      }).then(response => {
        console.log(response);
        console.log("后台成绩：" + response);
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
    }
  }
};
</script>

<style>
.T-container {
  width: 90%;
  height: 900px;
  margin: 20px auto;
  min-width: 900px;
  padding: 65px;
  border-radius: 10px;
}
.T-container .content-option {
  margin-top: 10px;
  padding: 20px;
  height: 120px;
}
.T-container .content-option .optionspace {
  margin-top: 10px;
  width: 50%;
}
.T-container .EXD-btn {
  margin-bottom: 40px;
  margin-left: 20px;
  box-shadow: 0 0 2px;
}

.T-container .EXD-btn p {
  width: 90px;
  margin-left: 10px;
  margin: 0 auto;
}
.T-container .submitbtn{
    margin:0 auto;
    border: 1px solid red;
}
</style>
