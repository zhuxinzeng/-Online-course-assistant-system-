<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="title">在线课程辅助后台管理</div>
      <div class="info">
        <el-form ref="form" :model="form" label-width="40px">
          <el-form-item>
            <div class="input">
              <p class="labelsize">账号</p>
              <input v-model="form.name" suffix-icon="el-icon-user">
            </div>
          </el-form-item>
          <el-form-item>
            <div class="input">
              <p class="labelsize">密码</p>
              <el-input v-model="form.pass" show-password></el-input>
            </div>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button @click="jumpregister()">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import url from "../../../serviceAPI.config";
import axios from "axios";

export default {
  data: function() {
    return {
      form: {
        name: "",
        pass: ""
      },
      adminusername: "",
      adminuser_id: ""
    };
  },
  methods: {
    jumpregister() {
      this.$router.push({ path: "/adminregister" });
    },
    login() {
      axios({
        url: url.adminlogin,
        method: "post",
        data: {
          name: this.form.name,
          pass: this.form.pass
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          this.adminusername = response.data.message.name;
          this.adminuser_id = response.data.message._id;
          this.$message.success("登录成功！");
          this.$store.commit("saveAdminuser", this.adminusername);
          this.$store.commit("saveAdminuserid", this.adminuser_id);
          this.$router.push({ path: "/Adminhome" });
        } else {
          this.$message.error(response.data.message);
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url("../../../assets/image/背景.jpg");
  background-repeat: no-repeat;

  background-size: 100% 100%;
}
.login-wrap .title {
  position: relative;
  width: 200px;
  margin: 0 auto;
  font-size: 20px;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.login-content {
  position: relative;
  top: 180px;
  width: 40%;
  min-width: 400px;
  height: 320px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: -10px 10px 20px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  border: 1px solid rgb(102, 99, 99);
}
.login-content .info {
  padding-top: 40px;
  padding-left: 70px;
  padding-right: 140px;
}
.login-content .info .input {
  display: flex;
}
.login-content .info .btn {
  margin-left: 45px;
  margin-top: -10px;
}
.login-content .info .input p {
  width: 50px;
  font-size: 16px;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
}


.login-content .input  input{
  height: 10px ;
  width: 40%;
}
</style>