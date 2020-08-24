<template>
  <div class="HP-container">
 <div class="HP-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="我的课程" key="1">   zhewg {{userid}} 
          <div class="classlist"  >
            <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
          <coursesdetailinfo :ID='item.ID' class="listrowspace"  :name="item.TEACHER_NAME" :college="item.TEACHER_COLLEGE" :number='item.COURSE_NUMBER' :coursename="item.COURSE_NAME" :room='item.COURSE_ROOM' :img="item.COURSE_IMAGE" :avator='item.TEACHER_AVATOR' ></coursesdetailinfo>
             </div>
            
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="我的作业" key="2" forceRender>
          <div class="classlist">
           
          </div>
        </a-tab-pane>
         <a-tab-pane tab="我的考试" key="3" forceRender>
          <div class="classlist"></div>
        </a-tab-pane>
       
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        coursesallInfo:'',
        userid:sessionStorage.getItem('userid')
    };
  },
  created(){
    // axios({
    //   url:url.getmycourses,
    //   method:'post',
    //   data:{
    //     userid:this.userid
    //     }

    // })
      
  },
  methods: {
    callback(key) {
      console.log(key);
    },}
};
</script>
<style >
@import url('../../assets/user-style/HomePage.css');
</style>