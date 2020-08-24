<template>
  <div class="EM-container">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item prop="subjectname" label="考试名称">
        <el-input v-model="dynamicValidateForm.subjectname"></el-input>
      </el-form-item>

      <el-form-item
        v-for="(exam, index) in dynamicValidateForm.examinfo"
       
        :key="exam.key"
        :prop="'examinfo.' + index + '.value'"
      >
       题号 <el-input v-model="exam.sequence"></el-input>
       题目名称 <el-input v-model="exam.ques_title"></el-input>
       题目类型<el-input v-model="exam.Topictypes"></el-input>
        <el-button @click.prevent="removeexam(exam)">删除</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addexam">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        examinfo: [
          {
            sequence: "",
            ques_title:""
          }
        ],
        subjectname:''
      
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
       
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeexam(item) {
      var index = this.dynamicValidateForm.examinfo.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.examinfo.splice(index, 1);
      }
    },
    addexam() {
     this.dynamicValidateForm.examinfo.push({});
      console.log(this.dynamicValidateForm)
    }
  }
};
</script>
<style>
.EM-container {
  width: 43%;
  height: 800px;
  margin: 0 auto;
  margin-left: 45px;
}
</style>