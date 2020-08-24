<template>
  <div class="PS-container">
    <div class="PS-nav">
      <img src="../../assets/image/头像.jpg" alt style />
      <div class="avatarinfo">
        <span>{{userinfo.userName }}</span>
        <span>{{ userinfo.major}}</span>
      </div>
      <div class="nav-info">
        <span>姓名： {{ userinfo.userName }}</span>
        <span>性别： {{ userinfo.sex }}</span>
        <span>专业： {{ userinfo.major }}</span>
        <span>学号： {{ userinfo.studentid }}</span>
        <span>电话： {{ userinfo.tel }}</span>
        <span>邮箱： {{ userinfo.email }}</span>
      </div>
    </div>
    <div class="editinfo">
      <a-tabs defaultActiveKey="0" size="large" tabPosition="top">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="down-square"></a-icon>基本信息
          </span>
          <div class="Essentialinfo">
            <EssentialInfo />
          </div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="down-square"></a-icon>密码修改
          </span>
          <PasswordInfo />
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="down-square"></a-icon>联系信息
          </span>
          <ContactInfo />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import EssentialInfo from "../../components/EssentialInfo.vue";
import PasswordInfo from "../../components/PasswordInfo.vue";
import ContactInfo from "../../components/ContactInfo.vue";
import url from "../../serviceAPI.config";
import axios from "axios";

export default {
  name: "ProfileSettings",
  props: "",
  components: { EssentialInfo, PasswordInfo, ContactInfo },
  data() {
    return {
  
      userinfo:'',
    
      _id:''
    };
  },

  created() {
     this._id = this.$store.state.userid;
    this._id = localStorage.getItem('userid');
    
  },
  mounted() {
    axios({
      url: url.getuserinfo,
      method: "post",
      data:{
        _id:this._id
      }
    }).then(response=>{
      console.log(response.data.message )
      if(response.status == 200){
        this.userinfo = response.data.message;
      } else{
        this.$message.error("服务器错误，数据获取失败！ ");
      }
    })
   
  }
};
</script>
<style scoped>
@import url("../../assets/user-style/ProfileSettings.css");
</style>