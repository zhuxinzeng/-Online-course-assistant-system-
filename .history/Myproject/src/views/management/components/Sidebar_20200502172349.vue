<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-menu-item  index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu  index="" >
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title"> 课程管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="goCourseinfo()">课程信息管理</el-menu-item>
          <el-menu-item >课程公告管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu  index="2" >
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span slot="title">题库管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  >发布考试</el-menu-item>
          <el-menu-item >查看成绩</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu  index="3" >
        <template slot="title">
          <i class="el-icon-document-checked"></i>
          <span slot="title">作业管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="goTaskManagement()">发布作业</el-menu-item>
          <el-menu-item  @click="goCheckTask()">查看作业</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu  index="4" >
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">学生管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="goStudentManagement()" >学生信息管理</el-menu-item>
          <el-menu-item  @click="goStudentResult()">学生成绩查看</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item   index="/Adminhome/OnlineQuestion">
        <i class="el-icon-s-promotion"></i>
        <span slot="title" @click="goOnlineQuestion()">答疑解惑</span>
      </el-menu-item>
       <el-menu-item  index="6">
        <i class="el-icon-upload2"></i>
        <span slot="title">资料上传</span>
      </el-menu-item>
       <el-menu-item  index="7">
        <i class="el-icon-coffee-cup"></i>
        <span slot="title">支持作者</span>
      </el-menu-item>
      <el-menu-item  index="8">
        <i class="el-icon-setting"></i>
        <span slot="title">个人资料设置</span>
      </el-menu-item>
     
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      collapse: false,
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
  methods:{
    goCourseinfo(){
      this.$router.push({path:'/Adminhome/CourseManagement'})
    },
    goStudentManagement(){
    this.$router.push({path:'/Adminhome/StudentManagement'})
    },
    goOnlineQuestion(){
       this.$router.push({path:'/Adminhome/OnlineQuestion'})
    },goStudentResult(){
      this.$router.push('/Adminhome/StudentResult');
    },
    goTaskManagement(){
       this.$router.push('/Adminhome/TaskManagement');
    },
    goCheckTask(){
       this.$router.push('/Adminhome/CheckTask');
    },
  }
};
</script>

<style >
.sidebar {
  position: relative;
  top: -6px;
  left: -1px;
  height: 100%;
  width:100%;
  box-shadow: 0 20px 1px #324157 ;

}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.sidebar .el-submenu {
  padding-left: 8px !important;
}

.sidebar .el-submenu__title {
  padding-left: 8px !important;
}
.sidebar .el-menu-item-group__title {
  padding: 0;
}
</style>
