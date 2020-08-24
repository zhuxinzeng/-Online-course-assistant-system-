<template>
  <div class="DU-container">
    <div class="upload">
      <el-upload
        class="upload-demo"
        :action="domain"
        :data="QiniuData"
        :on-error="uploadError"
        :on-success="uploadSuccess"
        :before-upload="beforeAvatarUpload"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">一次只能上传一个文件，且不超过10M</div>
      </el-upload>
    </div>
    <div class="uploadForm">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="所属课程">
          <el-select v-model="form.coursedata" placeholder="所属课程">
            <el-option label="Java" value="Java"></el-option>
            <el-option label="Javascript" value="Javascript"></el-option>
            <el-option label="高等数学" value="高等数学"></el-option>
            <el-option label="大学英语" value="大学英语"></el-option>
            <el-option label="数据结构" value="数据结构"></el-option>
            <el-option label="计算机组成原理" value="计算机组成原理"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传资料描述">
          <el-input v-model="form.describe" oninput="if(value.length>11)value=value.slice(0,13)" placeholder="上传资料描述(14字以内)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="senddata()">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../../../serviceAPI.config";

export default {
  name: "",
  data() {
    return {
      fileList: [],
      QiniuData: {
        key: "", //文件名字处理
        token: "" //七牛云token
      },
      domain: "http://upload.qiniup.com", // 七牛云的上传地址（华东区）
      qiniuaddr: "q9ojmk5ld.bkt.clouddn.com", // 七牛云的图片外链地址
      fileurl: "",
      uploadFileUrl: "",
      form: {
        describe: "",
        sort:'',
        coursedata: ""
      }
    };
  },
  mounted() {
    this.getQiniuToken();
  },
  methods: {
    uploadSuccess(response, file) {
      this.fileurl = URL.createObjectURL(file.raw);
      this.uploadFileUrl = `http://${this.qiniuaddr}/${response.key}`;
    },
    uploadError(err, file) {
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    beforeAvatarUpload(file) {
      //   const isTEXT = file.type === "text/text";
      //   const isPDF = file.type == "PDF/pdf";
      //   const isXLSX = file.type == "XLSX/xlsx";
      //   const isDOCX = file.type =="DOCX/docx"
      //   const isPNG = file.type === "image/png";
      //   const isJPEG = file.type === "image/jpeg";
      //   const isJPG = file.type === "image/jpg";
      const isLt10M = file.size / 1024 / 1024 < 10;

      //   if (!isTEXT && !isPNG && !isJPEG && !isJPG && !PDF && !XLSX && !DOCX) {
      //     this.$message.error("上传文件只能是 text／excel／JPG/ 格式!");
      //     return false;
      //   }
      if (!isLt10M) {
        this.$message.error("上传文件大小不能超过 10MB!");
        return false;
      }
      this.QiniuData.key = `${file.name}`;
    },
    getQiniuToken() {
      axios({
        url: url.getQiniuToken,
        method: "get"
      }).then(response => {
        console.log(response);
        this.QiniuData.token = response.data.qiniuToken;
      });
    },
    onSubmit() {
      console.log("submit!");
    },
    senddata() {
      axios({
        url: url.senduploaddata,
        method: "post",
        data: {
          data: this.form,
          fileurl:this.uploadFileUrl
        }
      }).then(response => {
        if (response.data.code == 200) {
          let msg = response.data.message;
          this.$message.success(msg);
        }
      });
    }
  }
};
</script>
<style>
.DU-container {
  width: 95%;
  min-width: 900px;
  height: 600px;
  margin: 45px;
  box-shadow: 0 0 2px;
  border-radius: 5px;
  border: 2px solid rgb(228, 228, 228);
}
.DU-container .upload {
  width: 90%;
  height: 400px;
  margin-left: 5%;
  margin-top: 60px;
  padding-left: 50px;
  padding-top: 60px;
  box-shadow: 0 0 1px;
  border: 1px solid rgb(228, 228, 228);
}
.DU-container .uploadForm {
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
  padding-top: 20px;
  padding-left: 30px;
  box-shadow: 0 0 1px;
  border: 1px solid rgb(228, 228, 228);
}
</style>