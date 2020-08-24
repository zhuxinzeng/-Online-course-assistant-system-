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
        :label-position="labelPosition"
      >
      <el-form-item label="真实姓名" prop="name" size="small"  >
          <el-input  v-model="ruleForm.name" autocomplete="off"  type="text"  prefix-icon='el-icon-user-solid'></el-input>
        </el-form-item>
        <el-form-item label="账号密码" prop="pass" size="small"  prefix-icon='el-icon-view'>
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off" ></el-input>
        </el-form-item>
         <el-form-item label="确认密码" prop="checkPass" size="small">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email" size="small">
          <el-input  v-model="ruleForm.email" autocomplete="off"  type="text"  prefix-icon='el-icon-s-platform'></el-input>
        </el-form-item>
         <el-form-item label="常用电话" prop="tel" size="small">
          <el-input   v-model="ruleForm.tel" autocomplete="off"  type="text"  prefix-icon='el-icon-phone'></el-input>
        </el-form-item>
         <el-form-item label="所属学院" prop="college" size="small">
          <el-input   v-model="ruleForm.college" autocomplete="off"  type="text"  prefix-icon='el-icon-s-home'></el-input>
        </el-form-item>
         <el-form-item label="所属职务" prop="job" size="small">
          <el-input   v-model="ruleForm.job" autocomplete="off"  type="text"  prefix-icon='el-icon-s-check'></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button @click="submitForm('ruleForm')" size="small">注册</el-button>
          <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      var CheckName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
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
          name:'',
          pass: '',
          checkPass: '',
          email:'',
          tel:'',
          college:'',
          job:''

         
        },
        rules: {
        name:[
                {validator:CheckName, trigger:'blur'}
            ],
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
  height: 600px;
 
}
.AdRe-container .content h2{
    margin-left: 40%;
  margin-bottom: 60px;
}
.AdRe-container .content {
  width: 30%;
  min-width: 500px;
  height: 95%;
  margin: 100px auto;
  padding-top: 20px;
  padding-left: 2%;
  padding-right: 5%;
  border-radius: 10px;
  box-shadow: 0 0 2px;
 
  background: rgb(241, 241, 241);
}

</style>