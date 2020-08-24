<template>
  <!-- 管理端注册页面 -->
  <div class="AdRe-container">
    <div class="content">
     <h2>注册信息填写</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
      <el-form-item label="真实姓名" prop="pass" size="small" >
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="账号密码" prop="pass" size="small">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="确认密码" prop="checkPass" size="small">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="pass" size="small">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="常用电话" prop="pass" size="small">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="所属学院" prop="pass" size="small">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="所属职务" prop="pass" size="small">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" size="small">提交</el-button>
          <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }  else {
              callback();
            }
          
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        labelPosition:'left'
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
.AdRe-container {
  width: 100%;
  min-width: 1000px;
  height: 700px;
  border: 1px solid red;
}
.AdRe-container .content h2{
    margin-left: 43%;
  margin-bottom: 60px;
}
.AdRe-container .content {
  width: 45%;
  min-width: 500px;
  height: 90%;
  margin: 100px auto;
  padding-top: 20px;
  padding-left: 8%;
  padding-right: 13%;
  border-radius: 10px;
  box-shadow: 0 0 2px;
  background: rgb(241, 241, 241);
}

</style>