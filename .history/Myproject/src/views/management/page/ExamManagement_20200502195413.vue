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
        v-for="(domain, index) in dynamicValidateForm.domains"
       
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
      >
       题号 <el-input v-model="domain.sequence"></el-input>
       题目名称 <el-input v-model="domain.subjectname"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
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
        domains: [
          {
            sequence: "",
            subjectname:""
          }
        ],
      
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
          console.log(valid)
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
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>
<style>
.EM-container {
  width: 43%;
  height: 800px;
  margin: 30px auto;
  margin-left: 45px;
}
</style>