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
              <a-radio value="A" @change="onChange">A.{{item.options_list[0]}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="B" @change="onChange">B.{{item.options_list[1]}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="C" @change="onChange">C.{{item.options_list[2]}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="D" @change="onChange">D.{{item.options_list[3]}}</a-radio>
            </a-col>
          </a-radio-group>
        </a-row>
      </div>
      <div>
        <a-button class="EXD-btn" @click="sure()" :disabled="showsure">
          <p @click="addanswersgroup()">确定</p>
        </a-button>
      </div>
    </div>
    <div class="submit">
      <a-button class="btn" @click="getresult()">
        <p @click="showModal()">提交</p>
      </a-button>
       <a-button class="btn" @click="pre()">
     <p >返回上一级</p>
      </a-button>
    </div>

    <a-modal title="本次检测成绩:" v-model="visible" @ok="handleOk" okText="确定" cancelText="取消">
      <p style="font-size:20px">{{Testresult}}</p>
    </a-modal>
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
      answer: "",
      answersgroup: [],
      Testresult: "",
      showsure: false,
      visible: false
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
    addanswersgroup() {
      let answersgroup = this.answersgroup;
      let answer = this.answer;
      answersgroup.push(answer);
      console.log("这个是答案合集" + answersgroup);
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
        if (response.status == 200) {
          this.Testresult = response.data.message;
          //   this.$message.success("后台传回_" + this.grade);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.Disable = true;
      this.showsure = true;
    },
    sure() {
      this.showsure = true;
      setTimeout(() => {
        this.showsure = false;
      }, 2000);
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    pre(){
        this.$router.go(-1)
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
  box-shadow: 0 0 1px;
}

.T-container .EXD-btn p {
  width: 90px;
  margin-left: 10px;
  margin: 0 auto;
}
.T-container .submit {
  margin-left: 42.5%;
  margin-bottom: 50px;
}
.T-container .submit .btn {
  width: 140px;
}
.T-container .submit .btn p {
  margin-top: 5px;
}
</style>
