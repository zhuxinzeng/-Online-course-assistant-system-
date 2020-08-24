<template>
  <div class="PI-container">
    <div class="nav">
      <div class="avatar">
        <img src="../../../assets/image/头像.jpg" alt width="100px" height="100px" />
        <div class="info">
          <span>姓名:</span>
          <span>{{userinfo.name}}</span>
          <span>职务:</span>
          <span>{{userinfo.job}}</span>
          <span>邮箱:</span>
          <span>{{userinfo.email}}</span>
          <span>电话:</span>
          <span>{{userinfo.tel}}</span>
          <span>所属学院:</span>
          <span>{{userinfo.college}}</span>
        </div>
      </div>
      <div class="btn">
        <button>编辑信息</button>
      </div>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
       <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import url from "../../../serviceAPI.config";
import axios from "axios";

export default {
  name: "PersonalInfo",
  data() {
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
    return {
      adminuser_id: "",
      userinfo: {},
       ruleForm: {
          pass: '',
         
        },
         rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
    };
  },
  created() {
    this.getdata();
    this.adminuser_id = sessionStorage.getItem("adminuser_id");
  },
  methods: {
    getdata() {
      axios({
        url: url.getadminuserinfo,
        method: "post",
        data: {
          _id: sessionStorage.getItem("adminuser_id")
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.userinfo = response.data.message;
        } else {
          this.$message.error("服务器错误，数据获取失败！ ");
        }
      });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style>
.PI-container {
  width: 90%;
  height: 500px;
  margin-top: 35px;
  margin-left: 80px;
  border-radius: 5px;
}
.PI-container .nav {
  width: 100%;
  padding: 1px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px;
}
.PI-container .nav button {
  margin-left: 160px;
  outline: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.PI-container .nav .avatar {
  margin: 30px;
}
.PI-container .nav .avatar .info {
  margin-left: 100px;
  margin-top: -90px;
}
.PI-container .nav .avatar span {
  margin-left: 30px;
  font-size: 16px;
}
.PI-container .content {
  width: 100%;
  height: 100px;
  padding: 300px;
  border: 1px solid grey;
}
</style>