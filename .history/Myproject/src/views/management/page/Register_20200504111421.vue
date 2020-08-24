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
        <el-form-item label="真实姓名" prop="name" size="small">
          <el-input
            v-model="ruleForm.name"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号密码" prop="pass" size="small">
          <el-input
            type="text"
            v-model="ruleForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" size="small">
          <el-input
            v-model="ruleForm.checkPass"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email" size="small">
          <el-input
            v-model="ruleForm.email"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-mobile"
          ></el-input>
        </el-form-item>
        <el-form-item label="常用电话" prop="tel" size="small">
          <el-input
            v-model="ruleForm.tel"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-phone-outline"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属学院" prop="college" size="small">
          <el-input
            v-model="ruleForm.college"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-house"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属职务" prop="job" size="small">
          <el-input
            v-model="ruleForm.job"
            autocomplete="off"
            type="text"
            prefix-icon="el-icon-s-check"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm()" size="small">注册</el-button>
          <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import url from "../../../serviceAPI.config";
import axios from "axios";

export default {
  data() {
    //姓名验证
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
    };
    //密码验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    //在此确认密码验证
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //所属学院验证
    var checkCollege = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("所属学院不能为空"));
      }
    };
    //邮箱格式验证
    var checkEmail = (rule, value, callback) => {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (!value) {
        return callback(new Error("电子邮箱不能为空"));
      }
      setTimeout(() => {
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("电子邮箱格式不正确"));
        }
      }, 100);
    };
    //手机格式验证
    var checkTel = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };

    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        email: "",
        tel: "",
        college: "",
        job: ""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        college: [{ validator: checkCollege, trigger: "blur" }]
      },

      labelPosition: "left"
    };
  },
  methods: {
    submitForm() {
      axios({
        url: url.adminregister,
        method: "post",
        data: {
          ruleForm: this.ruleForm
        }
      }).then(response => {
        if (response.status == 200) {
          let adminusername = response.data.message.name;
          this.$store.commit("saveAdminuser", adminusername);
          this.$store.commit("saveAdminuserid", this.adminuser_id);
          this.$message.success("注册成功");
          this.$router.push({ path: "/Adminhome" });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.AdRe-container {
  width: 100%;
  min-width: 1000px;
  height: 850px;
  background-image: url("../../../assets/image/背景2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.AdRe-container .content h2 {
  margin-left: 40%;
  margin-bottom: 60px;
}
.AdRe-container .content {
  position: relative;
  top: 120px;
  width: 30%;
  min-width: 500px;
  height: 65%;
  margin: 0 auto;
  padding-top: 20px;
  padding-left: 2%;
  padding-right: 5%;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ffffff;
  opacity: 0.8;
}
</style>