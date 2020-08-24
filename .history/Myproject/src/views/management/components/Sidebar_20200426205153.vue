<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    > 
      <el-menu-item index="1">
    <i class="el-icon-s-home"></i>
    <span slot="title">首页</span>
  </el-menu-item>

    <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-s-order"></i>
      <span slot="title">课程管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">课程信息管理</el-menu-item>
      <el-menu-item index="1-2">课程公告管理</el-menu-item>
    </el-menu-item-group>
   
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">题库管理</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">作业管理</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">考试管理</span>
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
      items: [
        {
          icon: "el-icon-s-home",
          index: "Adminhome/adminIndex",
          title: "首页"
        },
     
        {
          icon: "el-icon-s-order",
          index: "3",
          title: "课程管理",
          subs: [
            {

              index: "Adminhome/CourseManagement",
              title: "课程信息管理"
            },
            {
              index: "1",
              title: "课程公告管理"
            }
          ]
        },
        {
          icon: 'el-icon-s-management',
          index: "icon",
          title: "题库管理",
          subs: [
            {
              index: "form",
              title: "发布考试"
            },
            
            {
              index: "upload",
              title: "查看成绩"
            }
          ]
        },
       {
          icon: "el-icon-document-checked",
          index: "/donate",
          title: "作业管理",
           subs: [
            {
              index: "drag",
              title: "发布作业"
            },
              {
              index: "drag",
              title: "查看作业"
            },
           
          ]
        },   {
          icon: "el-icon-user-solid",
          index: "6",
          title: "用户管理",
          subs: [
            {
              index: "drag",
              title: "用户信息管理"
            },
           
          ]
        }, 
        
       {
          icon: "el-icon-s-tools",
          index: "/donate",
          title: "设置"
        },
        {
          icon: "el-icon-coffee-cup",
          index: "/donate",
          title: "支持作者"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  }
};
</script>

<style >
.sidebar{
  position: relative;
  top:-6px;
  left:-1px;
  height: 800px;
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
 .sidebar  .el-submenu{
  padding-left: 8px !important;
}
 .sidebar  .el-submenu__title{
  padding-left: 8px !important;
}
</style>
