<template>
  <div class="OH-container">
    <div v-for="(item,index) in homework" :key="index" class="content">
      {{item.Tasksequence}}
      {{item.Tasktitle}}
      <div class="input">
        <el-input v-model="anwer" placeholder="输入答案" style="width:30%"></el-input>
      </div>
      
      <!-- {{item.options_list}} -->
      <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
      <!-- <div class="content-option">
        <a-row>
          <a-radio-group>
            <a-col :span="10" class="optionspace">
              <a-radio value="A" @change="onChange">A.{{item.options_list[0].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="B" @change="onChange">B.{{item.options_list[1].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="C" @change="onChange">C.{{item.options_list[2].options_title}}</a-radio>
            </a-col>
            <a-col :span="10" class="optionspace">
              <a-radio value="D" @change="onChange">D.{{item.options_list[3].options_title}}</a-radio>
            </a-col>
          </a-radio-group>
        </a-row>
      </div>-->
      <div  class="btn">
        <button @click="sure()" :disabled="showsure">
          <p @click="addanswersgroup()">确定</p>
        </button>
      </div>
    </div>
    <div class="submit">
      <button class="btn" >
        提交
      </button>
      
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../../serviceAPI.config";

export default {
  name: "OnlineHomework",
  data() {
    return {
      homework: {},
      answer: ""
    };
  },
  created() {
    axios({
      url: url.gethomeworkinfo,
      method: "post",
      data: {
        taskname: "数据结构"
      }
    }).then(response => {
      console.log(response);
      if (response.status == 200) {
        this.homework = response.data.message;
      }
    });
  },
  methods: {}
};
</script>
<style  >
.OH-container {
  width: 90%;
  margin: 50px;
  border: 1px solid red;
}
.OH-container .content{
  padding: 25px;
}
.OH-container .content .input{
  margin-top: 20px;
}
.OH-container  button{
outline: none;
  height: 30px;
  width: 100px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.OH-container .submit{
  margin-left: 42%;
  
}
.OH-container .submit button{
  width: 200px;
  height: 40px;
}
</style>