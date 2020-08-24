<template>
  <div class="EI-container">
    <form class="EI-info">
      <div class="cloumn">
        <span>
          姓名：
          <input type="text" v-model="username" />
        </span>
        <span>
          性别：
          <a-select style="width:200px" @change="Change">
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </span>
        <span>头像：</span>
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
      <div class="cloumn">
        <span>
          专业：
          <input v-model="major" type="text" />
        </span>
        <span>
          学号：
          <input v-model="studentid" type="text" />
        </span>
      </div>
      <span>
        <button @click="handleSubmit()">保存</button>
      </span>
    </form>
  </div>
</template>
<script>
import url from "../serviceAPI.config";
import axios from "axios";
import * as qiniu from "qiniu-js";

export default {
  name: "EssentialInfo",
  props: "",
  components: {},
  data() {
    return {
      loading: false,
      imageUrl: "",
      _id: "",
      username: "",
      sex: "",
      major: "",
      studentid: "",
      QiniuData: {
        key: "", //图片名字处理
        token: "" //七牛云token
      },
      domain: "http://upload.qiniup.com", // 七牛云的上传地址（华东区）
      qiniuaddr: "q9ojmk5ld.bkt.clouddn.com", // 七牛云的图片外链地址
      imageurl: "", //提交到后台图片地址
      uploadPicUrl: ""
    };
  },
  mounted() {
    this._id = this.$store.state.userid;
    this._id = JSON.parse(localStorage.getItem("userid"));
    this.getQiniuToken();
  },
  methods: {
    Change(value) {
      // console.log(`selected ${value}`);
      this.sex = value;
      console.log(this.sex);
    },
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
    senddata() {
      axios({
        url: url.useressentialinfo,
        method: "post",
        data: {
          _id: this._id,
          username: this.username,
          major: this.major,
          sex: this.sex,
          studentid: this.studentid
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.$store.commit("saveUser", this.username);
          this.$store.commit("savestudentid", this.studentid);
          this.$message.success("修改信息成功");
        }
      });
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
    handleSubmit() {
      axios({
        url: url.senduserimgurl,
        method: "post",
        data: {
          imgurl: this.uploadPicUrl,
          _id: sessionStorage.getItem("userid")
        }
      }).then(response => {
        if (response.data.code == 200) {
          let msg = response.data.message;
          this.$message.success("ss");
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

<style scoped>
@import url("../assets/user-style/EssentialInfo.css");
</style>