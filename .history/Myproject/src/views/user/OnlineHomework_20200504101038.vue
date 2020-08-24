<template>
  <div class="OH-container">
    <div v-for="(item,index) in homework" :key="index" class="content">
      {{item.Tasksequence}}
      {{item.Tasktitle}}
      <div class="input">
        <a-input v-model="answer" placeholder="输入答案" style="width:30%"></a-input>
      </div>

      <div class="btn">
        <button @click="postanswers()">
          <p>提交</p>
        </button>
        <button @click="next">
          <p @click="getdata()">
            <b>下一题</b>
          </p>
        </button>
      </div>
    </div>
  <!--完成作业弹出框-->
  
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
      answer: "",
      number: 1,
      Tasksequence:1,
    
    };
  },
  created() {
    this.getdata();
    this.next();
  },
  methods: {
    //得到作业信息
    getdata() {
      axios({
        url: url.gethomeworkinfo,
        method: "post",
        data: {
          taskname: "数据结构",
          pagenumber: this.number
        }
      }).then(response => {
        console.log(response);
        if(response.status == 200 && response.data.message == ""){
         this.info();
             
        }else if (response.data.code == 200 && response.data.message) {
          this.homework = response.data.message;
        
        }
      });
    },
    postanswers() {
      axios({
        url: url.postanswers,
        method: "post",
        data: {
          answer: this.answer,
          tasksequence:this.Tasksequence
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 ) {
          this.Tasksequence=this.Tasksequence+1;
          this.answer='';
          this.$message.success("提交成功！")
          
        }
      });
    },
    next() {
      this.number++;
      console.log("这个是页数" + this.number);
    },
    //关闭弹出框
  info() {
      const h = this.$createElement;
      this.$info({
        title: '提示',
        content: h('div', {}, [
          h('p', '作业已完成'),
         
        ]),
        onOk() {},
      });
    },
  }
};
</script>
<style  >
.OH-container {
  width: 90%;
  margin: 50px;

}
.OH-container .content {
  padding: 25px;
}
.OH-container .content .input {
  margin-top: 20px;
}
.OH-container button {
  outline: none;
  height: 30px;
  width: 100px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.OH-container .submit {
  margin-left: 38%;
}
.OH-container .submit button {
  width: 200px;
  height: 35px;
}
</style>