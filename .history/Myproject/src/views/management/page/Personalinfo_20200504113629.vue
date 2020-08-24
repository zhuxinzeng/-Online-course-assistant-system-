<template>
  <div class="PI-container">
<div class="nav">
    <div class="avatar">
        <img src="../../../assets/image/头像.jpg" alt="" width="100px" height="100px">  
         <span>姓名</span>
        <span>职务</span>
            <span>邮箱</span>
                <span>电话</span>
                    <span>所属学院</span>
    </div>
<div class="personalinfo">
   
</div>
</div>
<div class="content"></div>
  </div>
</template>

<script>
import url from "../../../serviceAPI.config";
import axios from "axios";

export default {
name:'',
data(){
    return{
        adminuser_id:"",
        userinfo:{}
    }
},
created(){
    this.getdata();
    this.adminuser_id=sessionStorage.getItem("adminuser_id")
},
methods:{
    getdata(){
        axios({
      url: url.getadminuserinfo,
      method: "post",
      data: {
        _id:sessionStorage.getItem("adminuser_id")
      }
    }).then(response => {
      console.log(response);
      if (response.status == 200) {
        this.userinfo = response.data.message;
       
      } else {
        this.$message.error("服务器错误，数据获取失败！ ");
      }
    });
    }
},

}
</script>

<style>
.PI-container{
    width: 90%;
    height: 500px;
    margin-top: 35px;
    margin-left: 80px;
    border: 1px solid red;
}
.PI-container .nav{
    width: 100%;
    height: 150px;
    border: 1px solid red;
}
.PI-container .nav .avatar{
    margin: 20px;
}
.PI-container .nav .avatar span{
    margin-left: 60px;
}
.PI-container .content{
    width: 100%;
    height: 100px;
    border:1px solid red;
}

</style>