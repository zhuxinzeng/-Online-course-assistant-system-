<template>
  <div class="OH-container">
    <div v-for="(item,index) in homework" :key="index" class="content">
      {{item.Tasksequence}}
      {{item.Tasktitle}}
      <div class="input">
        <el-input v-model="answer" placeholder="输入答案" style="width:30%"></el-input>
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
   <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>作业已完成</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
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
      dialogVisible: false
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
        if (response.data.code == 200 && response.data.message) {
          this.homework = response.data.message;
          this.dialogVisible = true
        }else if(response.status == 200 && response.data.message == null){
             this.dialogVisible =true
             
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
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
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