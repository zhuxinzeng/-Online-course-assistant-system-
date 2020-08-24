<template>
  <div class="PI-container">
    <div class="nav">
      <div class="avatar">
      <div class="img">
        <img  alt  />
      </div>
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
      <div class="upload-info">
        <div>
          <el-upload
            class="upload-pic"
            list-type="picture"
            :action="domain"
            :data="QiniuData"
            :on-error="uploadError"
            :on-success="uploadSuccess"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false"
          >
            <img v-if="imageurl" :src="imageurl" class="uploadavatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="updatebtn">
          <el-button type="primary" :loading="loading" @click="handleSubmit">更新</el-button>
        </div>
      </div>
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
  </div>
</template>

<script>
import url from "../../../serviceAPI.config";
import axios from "axios";
import * as qiniu from "qiniu-js";

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
      formdisabled: true,
      loading: false,
      QiniuData: {
        key: "", //图片名字处理
        token: "" //七牛云token
      },
      domain: "http://upload.qiniup.com", // 七牛云的上传地址（华东区）
      qiniuaddr: "q9ojmk5ld.bkt.clouddn.com", // 七牛云的图片外链地址
      imageurl: "", //提交到后台图片地址
      uploadPicUrl: "",
      avatar_img: ""
    };
  },
  mounted() {
    this.getQiniuToken();
  },
  created() {
    this.getdata();
    this.adminuser_id = sessionStorage.getItem("adminuser_id");
    this.avatar_img = sessionStorage.getItem("avatarurl");
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
          this.ruleForm = this.userinfo;
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
          _id: sessionStorage.getItem("adminuser_id")
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
    },
    // handleRemove(file, fileList) {
    //   this.imageurl = "";
    // },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
    //   );
    // },
    beforeAvatarUpload(file) {
      const isPNG = file.type === "image/png";
      const isJPEG = file.type === "image/jpeg";
      const isJPG = file.type === "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isPNG && !isJPEG && !isJPG) {
        this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!");
        return false;
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
        return false;
      }
      this.QiniuData.key = `upload_pic_${file.name}`;
    },
    uploadSuccess(response, file) {
      this.imageurl = URL.createObjectURL(file.raw);
      this.uploadPicUrl = `http://${this.qiniuaddr}/${response.key}`;
    },

    uploadError(err, file) {
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // },
    //提交数据到后台
    handleSubmit() {
      axios({
        url: url.getimgurl,
        method: "post",
        data: {
          imgurl: this.uploadPicUrl,
          _id: sessionStorage.getItem("adminuser_id")
        }
      }).then(response => {
        if (response.data.code == 200) {
          let msg = response.data.message;
          this.$message.success(msg);
        }
      });
    },

    getQiniuToken() {
      axios({
        url: url.getQiniuToken,
        method: "get"
      }).then(response => {
        console.log(response);

        this.QiniuData.token = response.data.qiniuToken;
      });
    }
  }
};
</script>

<style>
.PI-container {
  width: 90%;
  min-width: 900px;
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
  display: flex;
  margin: 30px;
  
}
.PI-container .nav .avatar img {
  width: 110px;
  height: 100px;
  

}
.PI-container .nav  .info {
  width: 80%;
  min-width: 900px;
  margin-top: 15px;
  
}
.PI-container .nav  .btn {
  margin-left: 10px;
  margin-top: -60px;
 
}
.PI-container .nav .avatar span {
  width: 80px;
  margin-left: 30px;
  font-size: 16px;
}
.PI-container .content {
  display: flex;
  width: 100%;
  margin-top: 6px;
  height: 500px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px;
}
.PI-container .upload-info .upload-pic {
  border-radius: 6px;
  cursor: pointer;
  width: 178px;
  height: 178px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d9d9d9;
}
.PI-container .upload-info .upload-pic .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.PI-container .upload-ipc .el-upload:hover {
  border-color: #409eff;
}
.PI-container .upload-info .upload-pic .uploadavatar {
  width: 178px;
  height: 178px;
  display: block;
}
.PI-container .upload-info .updatebtn {
  margin-top: 10px;
  margin-left: 50px;
}
</style>