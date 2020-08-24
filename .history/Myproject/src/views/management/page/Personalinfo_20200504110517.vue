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
export default {

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
    height: 200px;
    border: 1px solid red;
}
.PI-container .nav .avatar{
    margin: 20px;
}
.PI-container .nav .avatar span{
    margin-left: 60px;
}
.PI-container .content{
    width: 90%;
    height: 100px;
    border:1px solid red;
}

</style>