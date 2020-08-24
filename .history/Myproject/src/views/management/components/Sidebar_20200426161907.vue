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
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
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
          index: "dashboard",
          title: "首页"
        },
     
        {
          icon: "el-icon-s-order",
          index: "3",
          title: "课程管理",
          subs: [
            {

              index: "",
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
.sidebar {
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  overflow-y: scroll;
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
