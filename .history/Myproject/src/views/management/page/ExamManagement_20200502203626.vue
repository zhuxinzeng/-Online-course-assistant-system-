<template>
  <div class="EM-container">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item prop="subjectname">
        考试名称
        <el-input v-model="dynamicValidateForm.subjectname"></el-input>
      </el-form-item>

      <el-form-item
        v-for="(exam, index) in dynamicValidateForm.examinfo"
        :key="exam.key"
        :prop="'examinfo.' + index + '.value'"
      >
        题号
        <el-input v-model="exam.sequence"></el-input>题目类型
        <el-input v-model="exam.Topictypes"></el-input>题目名称
        <el-input v-model="exam.ques_title"></el-input>

        <el-button @click.prevent="removeexam(exam)">删除</el-button>
      </el-form-item>
      <el-form-item
        v-for="(options, index) in dynamicValidateForm.examinfo.options_list"
        :key="options.key"
        :prop="'options_list.' + index + '.value'"
      >
        选项
        <el-input v-model="options.options_title"></el-input>
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
            ques_title: "",
            Topictypes: "",
            options_list: [
              {
                options_title: "22"
              }
            ]
          }
        ],
        subjectname: ""
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
      console.log(this.dynamicValidateForm);
    }
  }
};
</script>
<style>
.EM-container {
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
}
</style>