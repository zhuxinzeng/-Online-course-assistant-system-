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
        <button @click="showform()">编辑信息</button>
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
        :disabled="formdisabled"
      >
        <el-form-item label="姓名" prop="name" style="width:500px;">
          <el-input type v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" style="width:500px;">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职务" prop="job" style="width:500px;">
          <el-input type v-model="ruleForm.job" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" style="width:500px;">
          <el-input type v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel" style="width:500px;">
          <el-input type v-model="ruleForm.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属学院" prop="college" style="width:500px;">
          <el-input type v-model="ruleForm.college" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateinfo()">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      
    </div>
<div class="upload-info">
    <div>
      <el-upload
          class="upload-pic"
          :action="domain"
          :data="QiniuData"
          :on-remove="handleRemove"
          :on-error="uploadError"
          :on-success="uploadSuccess"
          :before-remove="beforeRemove"
          :before-upload="beforeAvatarUpload"
          :limit="3"
          multiple
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
        <el-button size="small" type="primary">选择图片</el-button>
      </el-upload>
      <div>
        <img class="pic-box" :src="uploadPicUrl" v-if="uploadPicUrl">
      </div>
    </div>
    <div>
      <el-button type="primary" :loading="loading" @click="handleSubmit">提交</el-button>
      <el-button type="info" plain >取消</el-button>
    </div>
  </div>
    
  </div>
</template>

<script>
import url from "../../../serviceAPI.config";
import axios from "axios";

export default {
  name: "PersonalInfo",
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      }
      callback();
    };
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
    var validateJob = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入职务"));
      }
      callback();
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      }
      callback();
    };
    var validateTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话"));
      }
      callback();
    };
    var validateCollege = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入所属学院"));
      }
      callback();
    };
    return {
      adminuser_id: "",
      userinfo: {},
      ruleForm: {
        name: "",
        pass: "",
        job: "",
        email: "",
        tel: "",
        college: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        job: [{ validator: validateJob, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        tel: [{ validator: validateTel, trigger: "blur" }],
        college: [{ validator: validateCollege, trigger: "blur" }]
      },
      formdisabled: true
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
          this.ruleForm=this.userinfo
        } else {
          this.$message.error("服务器错误，数据获取失败！ ");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showform() {
      this.formdisabled = false;
    },
    updateinfo() {
      axios({
        url: url.updataadminuserinfo,
        method: "post",
        data: {
          userinfo: this.ruleForm,
          _id:sessionStorage.getItem('adminuser_id')
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.userinfo = response.data.message;
          this.formdisabled = true;
          this.getdata();
        } else {
          this.$message.error("服务器错误，数据获取失败！ ");
        }
      });
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
  box-shadow: 0px 0px 2px;
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
width: 80px;
  margin-left: 30px;
  font-size: 16px;
}
.PI-container .content {
  width: 100%;
  margin-top: 6px;
  height: 500px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px;
}
.PI-container .upload-info{
  position: absolute;
  top: 30%;
  right: 20%;
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.PI-container .upload-info .upload-pic{
  margin: 20px;
}
</style>