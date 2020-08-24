<template>
  <div class="EI-container">
    <form class="EI-info">
      <div class="cloumn">
        <span>
          姓名：
          <input type="text"  v-model="username" />
        
        </span>
        <span>
          性别：
          <a-select style="width:200px" @change="Change" >
            <a-select-option value="男" >男</a-select-option>
            <a-select-option value="女" >女</a-select-option>
          </a-select>
        </span>
        <span>
          头像：
          <div class="avatar">
            <!-- <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :beforeUpload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading? 'loading' :'plus' "></a-icon>
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload> -->
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
          </div>
        </span>
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
        <button @click="senddata()">保存</button>
      </span>
    </form>
  </div>
</template>
<script>
import url from "../serviceAPI.config";
import axios from "axios";
import * as qiniu from 'qiniu-js';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: "EssentialInfo",
  props: "",
  components: {},
  data() {
    return {
      loading: false,
      imageUrl: "",
      _id:'',
      username: "",
      sex:'',
      major:'',
      studentid:''

    };
  },
  mounted(){
   this._id = this.$store.state.userid
   this._id = JSON.parse(localStorage.getItem('userid'))

  }
  ,
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    Change(value) {
      // console.log(`selected ${value}`);
      this.sex = value;
      console.log(this.sex)
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    },
    senddata() {
      axios({
        url:url.useressentialinfo,
        method: 'post',
        data: {
          _id: this._id,
          username:this.username,
          major:this.major,
          sex:this.sex,
          studentid:this.studentid


        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
         this.$store.commit('saveUser',this.username)
         this.$store.commit('savestudentid',this.studentid)
          this.$message.success("修改信息成功");
        }
      });
    }
  }
};
</script>

<style scoped>
@import url("../assets/user-style/EssentialInfo.css");
</style>