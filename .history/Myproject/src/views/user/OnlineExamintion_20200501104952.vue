<template>
  <div class="OE-container">
    <Nav /> <div class="goback" @click="goback()" > <a-icon type="left" />返回上一级</div>
    <div class="top" >
      <a-menu v-model="current" mode="horizontal" style="border-radius:10px;box-shadow: 0 0 1px;">
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />计算机科学与技术学院
          </span>
          <a-menu-item-group title="编程语言">
             <a-menu-item key="setting:1" @click="showexaminfo()" ><p @click="getdata()"> Java高级编程</p></a-menu-item>
            <a-menu-item key="setting:2">C语言教程</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="编程基础">
            <a-menu-item key="setting:3" >数据结构</a-menu-item>
            <a-menu-item key="setting:4">软件工程</a-menu-item>
          </a-menu-item-group>
          
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />理学院
          </span>
          <a-menu-item-group title="数学基础">
            <a-menu-item key="setting:5">高等数学</a-menu-item>
            <a-menu-item key="setting:6">概率论</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
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
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
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
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />公共卫生学院
          </span>
          <a-menu-item-group title="公共卫生">
            <a-menu-item key="setting:13">公共卫生基础</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />艺术学院
          </span>
          <a-menu-item-group title="新闻艺术">
            <a-menu-item key="setting:14">新闻学</a-menu-item>
            <a-menu-item key="setting:15">广播学</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />医学院
          </span>
          <a-menu-item-group title="医学">
            <a-menu-item key="setting:16">口腔医学</a-menu-item>
            <a-menu-item key="setting:17">临床医学</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />电子信息学院
          </span>

          <a-menu-item key="setting:18">通信工程</a-menu-item>
          <a-menu-item key="setting:19">电路与系统</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />生命科学学院
          </span>

          <a-menu-item key="setting:20">生物技术</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />教育科学学院
          </span>

          <a-menu-item key="setting:21">幼儿教育</a-menu-item>
          <a-menu-item key="setting:22">中小学教育</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
           <span @click='hideshowbox()' slot="title" class="submenu-title-wrapper">
            <a-icon type="book" />交通学院
          </span>
          <a-menu-item-group title="交通工程">
            <a-menu-item key="setting:23">交通运输</a-menu-item>
            <a-menu-item key="setting:24">交通设备与控制工程</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="examinfo" :class="{examInfo:showbox}">
      <div class="detail">
      
        <span>
           <b> 考试名称: </b>
          <p>{{subjectname}}</p>
        </span>
        
        
        <span> 
         <b> 考试时间: </b>
          <p>{{examtime}}</p>
        </span>

        <span>
        <b>  考试分值:</b>
          <p>{{examscore}}</p>
        </span>
        <span>
          <b>考生姓名:</b>
          <p>{{username}}</p>
        </span>
        <span>
         <b> 考生学号:</b>
          <p>{{studentid}}</p>
        </span>
      
      </div>
      <section >
        <b><i>
        <p>（1）考试开始信号发出后，考生方可开始作答。</p>
        <p>（2）考生在考试过程中如不遵守考场纪律，不服从监考教师管理，有违纪违规行为，按有关规定进行处罚。</p>
       <p>（3）考生在考场内必须保持安静，不准喧哗，不准交头接耳、左顾右盼、打手势、做暗号、不准夹带、旁窥、抄袭或有意让他人抄袭，不准传抄或交换考试材料。</p></i></b>
      </section>
      <div class="startbtn" >
        <a-button><router-link :to="{path:'/Examdetails'}" >开始考试</router-link> </a-button>
      </div>
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../serviceAPI.config";
import Nav from "../../components/nav.vue";
import Examdetails from '../../components/Examdetails.vue'
export default {
  name: "",
  props: "",
  components: { Nav},
  data() {
    return {
      showbox:true,
      current: ["mail"],
      examinfo:[],
      username:'',
      subjectname:'',
      examtime:'',
      examscore:'',
      studentid:'',
      _id:""
    };
  },
  created(){
     this._id = this.$store.state.userid;
     this._id = sessionStorage.getItem('userid')
      this.username=this.$store.state.userName;
    this.username=sessionStorage.getItem("userName");
    this.studentid = sessionStorage.getItem('studentid')
    
    
  },
  mounted(){
   this.getdata()
  },
  
  methods: {
   showexaminfo(){
     this.showbox=false;
   },
   hideshowbox(){
     this.showbox=true
   },
  
   getdata(){
     axios({
      url:url.getexamallInfo,
      method:'post',
    }).then(response=>{
        console.log(response);
        if(response.status == 200){
          this.examinfo = response.data.message;
           this.subjectname =this.examinfo[0].subjectname;
           this.examtime = this.examinfo[0].examtime;
           this.examscore = this.examinfo[0].examscore;
         
        }
        else
        {
           this.$message.error('服务器端错误！');
        }

    })
   
   },
   goback(){
     this.$router.push('/Home');
   }
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
.OE-container .goback{
position: relative;
top:10px;
left:80px;

}

.OE-container .showexamdetails{
  display: none;
}
.OE-container .examinfo {

  width: 50%;
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
  margin-left: 20%;

}
.OE-container .examinfo .detail span {
  display: flex;
  margin-top: 3px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 21px;
}
.OE-container .examinfo .detail span p {
  font-size: 19px;
  margin-left: 20%;
}
.OE-container .examinfo section{
  margin-top: 20px;
  margin-left: 6%;
}
.OE-container .examinfo .startbtn {
  width: 100px;
  margin: 10px 45%;
padding-bottom: 15px;

}
</style>