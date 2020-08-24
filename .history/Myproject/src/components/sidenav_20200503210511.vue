<template>

<div  class="side-nav">
  <div class="combination">
    <img src="../assets/image/伸缩.png" @click="toggleCollapsed" style="width:80px;height:60px;"
    > 
   
  
    <a-menu
      mode="inline"
      theme="light"
      :inlineCollapsed="collapsed"
      style="height:830px;"
      openChange
    >
    <a-menu-item key="1">
      <router-link to='/Home/HomePage'>
    <a-icon type='home' />
      <span>主页</span>
    
      </router-link>
    </a-menu-item>
      <a-menu-item key="2" >
         <router-link to='/Home/CourseInfo'>
        <a-icon type="book" />
        <span>
         课程信息
          </span></router-link> 
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to='/Home/KnowledgeDetection'>
        <a-icon type="file-word" />
        <span>
          知识检测
          
        </span></router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to='/Home/OnlineAnswer'> 
        <a-icon  type="team"/>
        <span>
              在线答疑
       </span></router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="file-text" /><span>在线作业</span></span>
        <a-menu-item key="5" @click="goOnlinehomework()">高等数学</a-menu-item>
        <a-menu-item key="6">大学英语</a-menu-item>
        <a-menu-item key="7">Java</a-menu-item>
        <a-menu-item key="8">C语言</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <router-link to='/OnlineExamintion'> 
        <a-icon  type="desktop"/>
        <span>
              在线考试
       </span></router-link>
      </a-menu-item>
      <a-menu-item key="10">
         <router-link to='/Home/DataDownload'> 
        <a-icon  type="download"/>
        <span>
             资料下载
        
          
          </span></router-link>
         
      </a-menu-item>
      <a-menu-item key="11"><router-link to='/Home/BadgeAward'>
        <a-icon  type="star"/>
        <span>
             徽章奖励
          </span></router-link>
      </a-menu-item>
      <a-menu-item key="12"> <router-link to='/Home/ProfileSettings'>
        <a-icon  type="setting"/>
        <span>
             个人资料设置
         </span></router-link>
      </a-menu-item>
    </a-menu>
 </div>
 <router-view></router-view>
  </div>

</template>

<script>


export default {
    name:'',
    props:'',
    components:'',
    data(){
return {
     collapsed:true,
    
}
    },
    methods:{
         toggleCollapsed() {
        this.collapsed = !this.collapsed;
       

      },
      goOnlinehomework(){
        this.$router.push('/Home/OnlineHomework')
      }
     
    

    }
}
</script>
<style  scoped>
@import  '../assets/user-style/sidenav.css';
</style>