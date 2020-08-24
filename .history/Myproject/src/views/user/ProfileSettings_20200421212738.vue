<template>
  <div class="PS-container">
    <div class="PS-nav">
      <img src="../../assets/image/头像.jpg" alt style />
      <div class="avatarinfo">
        <span>{{ name }}</span>
        <span>{{ major }}</span>
      </div>
      <div class="nav-info">
        <span>姓名： {{ Name }}</span>
        <span>性别： {{ Gender }}</span>
        <span>专业： {{ Major }}</span>
        <span>学号： {{ StudenID }}</span>
        <span>电话： {{ Telephone }}</span>
        <span>邮箱： {{ Email }}</span>
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
      name: "Brace",
      major: "软件工程",
      Name: "brace",
      Gender: "男",
      Major: "软件工程",
      StudenID: "1613073084",
      Telephone: "15162039314",
      userinfo:'',
      Email: "321094948@qq.com",
      _id:''
    };
  },

  created() {
     this._id = this.$store.state.userid;
    this._id = JSON.parse(localStorage.getItem("userid"));
    
  },
  mounted() {
    axios({
      url: url.getuserinfo,
      method: "post",
      data:{
        id:this._id
      }
    }).then(response=>{
      console.log('数据库返回后端数据：'+response )
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