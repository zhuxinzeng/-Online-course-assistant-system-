<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="title">在线课程辅助后台管理</div>
      <div class="info">
        <el-form ref="form" :model="form" label-width="40px">
          <el-form-item>
            <div class="input">
              <p class="labelsize">账号</p>
              <input v-model="form.name" suffix-icon="el-icon-user" />
            </div>
          </el-form-item>
          <el-form-item>
            <div class="input">
              <p class="labelsize">密码</p>
              <input type="password" v-model="form.pass" show-password />
            </div>
          </el-form-item>
          <el-form-item class="btn">
            <button type="primary" @click="login()">
              <p>登录</p>
            </button>
            <button @click="jumpregister()">
              <p>注册</p>
            </button>
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
  width: 32%;
  min-width: 500px;
  height: 300px;
  padding: 10px;
  margin: 0 auto;
  box-shadow: -10px 10px 10px;
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
.input input {
  height: 30px;
  width: 80%;
  border:0;
}
.login-content .info .btn {
  width: 400px;
}
.login-content .info .btn button {
  outline: none;
  height: 25px;
  width: 80px;
  margin-left: 12%;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.login-content .info .btn p {
  margin-top: -8px;
}
.login-content .info .input p {
  width: 45px;
  font-size: 14px;
  color: black;
  margin-top: -5px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

</style>