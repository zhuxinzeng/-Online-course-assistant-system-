<template>
  <div class="CI-container">
    <div class="CI-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="必修课程" key="1"> 
          <div class="classlist"  >
            <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
              <coursesdetailinfo :_id='item._id' class="listrowspace"  :name="item.TEACHER_NAME" :college="item.TEACHER_COLLEGE" :number='item.COURSE_NUMBER' :coursename="item.COURSE_NAME" :room='item.COURSE_ROOM' :img="item.COURSE_IMAGE" :avator='item.TEACHER_AVATOR' ></coursesdetailinfo>
             </div>
            
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="选修课程" key="2" forceRender>
          <div class="classlist">
              <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
              <coursesdetailinfo :_id='item._id' class="listrowspace"  :name="item.TEACHER_NAME" :college="item.TEACHER_COLLEGE" :number='item.COURSE_NUMBER' :coursename="item.COURSE_NAME" :room='item.COURSE_ROOM' :img="item.COURSE_IMAGE" :avator='item.TEACHER_AVATOR' ></coursesdetailinfo>
             </div>
          </div>
        </a-tab-pane>
        <a-tab-pane tab key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
    <div class="footer">
      <div class="pagination">
        <a-pagination  @change="pagechange"   v-model="pageNumber"  :total="50"   ></a-pagination>
      </div>
    </div>
    
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

      courseId: "",
      coursesallInfo: [],
    };
  },
  created() {
    // axios({
    //   url:url.getcoursesallInfo,
    //   method: 'post',
    
    // }).then(response => {
    //   console.log('服务器返回数据'+response);
    //   if (response.status == 200) {
    //     this.coursesallInfo=response.data.message
        
    //   }
    // });
    this.pagechange();
  },
  methods: {
    callback(key) {
      console.log(key);
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