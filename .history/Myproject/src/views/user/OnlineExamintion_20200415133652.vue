<template>
  <div class="OE-container">
    <Nav />
    <div class="top">
      <a-menu v-model="current" mode="horizontal" style="border-radius:10px;box-shadow: 0 0 1px;">
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />计算机科学与技术学院
          </span>
          <a-menu-item-group title="编程基础">
            <a-menu-item key="setting:1" @click="showbox==true">数据结构</a-menu-item>
            <a-menu-item key="setting:2">软件工程</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="编程语言">
            <a-menu-item key="setting:3">C语言教程</a-menu-item>
            <a-menu-item key="setting:4">Java高级编程</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />理学院
          </span>
          <a-menu-item-group title="数学基础">
            <a-menu-item key="setting:5">高等数学</a-menu-item>
            <a-menu-item key="setting:6">概率论</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />政治学院
          </span>
          <a-menu-item-group title="20世纪">
            <a-menu-item key="setting:31">毛泽东思想</a-menu-item>
            <a-menu-item key="setting:32">马克思主义</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="21世纪">
            <a-menu-item key="setting:7">科学发展观</a-menu-item>
            <a-menu-item key="setting:8">社会主义核心价值观</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />外国语学院
          </span>
          <a-menu-item-group title="大学一年级">
            <a-menu-item key="setting:9" >大学英语（一）</a-menu-item>
            <a-menu-item key="setting:10">大学英语（二）</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="大学二年级">
            <a-menu-item key="setting:11">大学英语（三）</a-menu-item>
            <a-menu-item key="setting:12">大学英语（四）</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />公共卫生学院
          </span>
          <a-menu-item-group title="公共卫生">
            <a-menu-item key="setting:13">公共卫生基础</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />艺术学院
          </span>
          <a-menu-item-group title="新闻艺术">
            <a-menu-item key="setting:14">新闻学</a-menu-item>
            <a-menu-item key="setting:15">广播学</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />医学院
          </span>
          <a-menu-item-group title="医学">
            <a-menu-item key="setting:16">口腔医学</a-menu-item>
            <a-menu-item key="setting:17">临床医学</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />电子信息学院
          </span>

          <a-menu-item key="setting:18">通信工程</a-menu-item>
          <a-menu-item key="setting:19">电路与系统</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />生命科学学院
          </span>

          <a-menu-item key="setting:20">生物技术</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />教育科学学院
          </span>

          <a-menu-item key="setting:21">幼儿教育</a-menu-item>
          <a-menu-item key="setting:22">中小学教育</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />交通学院
          </span>
          <a-menu-item-group title="交通工程">
            <a-menu-item key="setting:23">交通运输</a-menu-item>
            <a-menu-item key="setting:24">交通设备与控制工程</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="examinfo" :class="{'examInfo':'showbox'}">
      <div class="detail">
        <span>
          考试名称:
          <p>{{}}</p>
        </span>
        <span>
          考试时间:
          <p>{{}}</p>
        </span>
        <span>
          考试分值:
          <p>{{}}</p>
        </span>
      </div>
      <section >
        <p>（1）考试开始信号发出后，考生方可开始作答。</p>
        <p>（2）考生在考试过程中如不遵守考场纪律，不服从监考教师管理，有违纪违规行为，按有关规定进行处罚。</p>
       <p>（3）考生在考场内必须保持安静，不准喧哗，不准交头接耳、左顾右盼、打手势、做暗号、不准夹带、旁窥、抄袭或有意让他人抄袭，不准传抄或交换考试材料。</p>
      </section>
      <div class="startbtn">
        <a-button>开始考试</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/nav.vue";
export default {
  name: "",
  props: "",
  components: { Nav },
  data() {
    return {
      showbox:true,
      current: ["mail"]
    };
  },
  methods: {
   
  }
};
</script>
<style scoped>
.OE-container .top {
  width: 90%;
  height: 60px;
  margin: 30px auto;
  padding: 5px;
  background: #f6f6f6;
  border-radius: 10px;
  box-shadow: 0 0 4px;
}
.OE-container .examinfo {

  width: 50%;
  height: 500px;
  margin: 80px auto;
  border-radius: 10px;
  box-shadow: 0 0 4px;
}
.OE-container .examInfo{
  display: none;
}
.OE-container .examinfo .detail {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;

}
.OE-container .examinfo .detail span {
  display: flex;
  margin-top: 50px;
  font-size: 20px;
}
.OE-container .examinfo .detail span p {
  margin-left: 15%;
}
.OE-container .examinfo section{
  margin-top: 20px;
  margin-left: 10px;
}
.OE-container .examinfo .startbtn {
  width: 100px;
  margin: 10px 45%;

}
</style>