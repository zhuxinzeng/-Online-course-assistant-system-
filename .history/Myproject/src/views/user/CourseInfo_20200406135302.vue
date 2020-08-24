<template>
  <div class="CI-container">
    <div class="CI-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="必修课程" key="1"> 
          <div class="classlist"  >
            <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
              <coursesdetailinfo class="listrowspace"  :name="item.TEACHER_NAME" :college="item.TEACHER_COLLEGE"></coursesdetailinfo>
             </div>
            
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="选修课程" key="2" forceRender>
          <div class="classlist"></div>
        </a-tab-pane>
        <a-tab-pane tab key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
    <div class="footer">
      <div class="pagination">
        <a-pagination  @change="pagechange"   v-model="pageNumber"  :total="50" :showTotal="total=>`共 ${8} 条`"  ></a-pagination>
      </div>
    </div>
    <!--抽屉-->
    <a-drawer :closable="false" @close="onClose" :placement="placement" :visible="visible">
      <div class="CI-drawerinfo">
        <h2>
          <i>课程详细信息</i>
        </h2>
        <span>
          名称:
          <i>{{name}}</i>
        </span>
        <span>
          学分:
          <i>{{credit}}</i>
        </span>
        <span>
          课时:
          <i>{{Classhour}}</i>
        </span>
        <span>
          授课老师:
          <i>{{teacher}}</i>
        </span>
        <span>
          授课教室:
          <i>{{classroom}}</i>
        </span>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../serviceAPI.config";
import coursesdetailinfo from "../../components/CoursesdetailInfo.vue";

export default {
  name: "CourseInfo",
  props: "",
  components: { coursesdetailinfo },
  data() {
    return {
       pageNumber: 1,
      Number: 12,
      visible: false,
      placement: "right",
      name: "高等数学",
      credit: "3",
      Classhour: "32",
      teacher: "周丹",
      classroom: "3-201",

      courseId: "",
      coursesallInfo: [],
    };
  },
  created() {
    axios({
      url:url.getcoursesallInfo,
      method: 'post',
    
    }).then(response => {
      console.log(response);
      if (response.status == 200) {
        this.coursesallInfo=response.data.message
        
      }
    });
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  
    
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    pagechange(pageNumber){
      this.pageNumber=pageNumber;
      console.log("Page: ", pageNumber);
      axios({
        url:url.getcoursesallInfo,
        method:'post',
        data:{
         pageNumber:this.pageNumber
        }
      })
      .then(response=>{
       if (response.status==200 && response.data.message){
         this.coursesallInfo=response.data.message
       }
      })
    },  
   
  }
};
</script>

<style scoped>
@import url("../../assets/user-style/CourseInfo.css");
</style>