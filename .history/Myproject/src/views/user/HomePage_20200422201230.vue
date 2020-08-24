<template>
  <div class="HP-container">
    <div class="HP-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="我的课程" key="1">
          <div class="classlist">
            <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
              <coursesdetailinfo
                 :_id='item._id'
                :ID="item.ID"
                class="listrowspace"
                :name="item.TEACHER_NAME"
                :college="item.TEACHER_COLLEGE"
                :number="item.COURSE_NUMBER"
                :coursename="item.COURSE_NAME"
                :room="item.COURSE_ROOM"
                :img="item.COURSE_IMAGE"
                :avator="item.TEACHER_AVATOR"
              ></coursesdetailinfo>
            </div>
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="我的作业" key="2" forceRender>
          <div class="classlist"></div>
        </a-tab-pane>
        <a-tab-pane tab="我的考试" key="3" forceRender>
          <div class="classlist"></div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../../serviceAPI.config";
import coursesdetailinfo from "../../components/CoursesdetailInfo.vue";


export default {
  name: "",
  components: { coursesdetailinfo },
  data() {
    return {
      coursesallInfo: "",
      userid: sessionStorage.getItem("userid"),
    };
  },
  created() {
    axios({
      url: url.getmycourses,
      method: "post",
      data: {
        userid: this.userid
      }
    }).then(response=>{
      console.log(response)
      if(response.status == 200){
        this.$message.success('获取成功')
        this.coursesallInfo = response.data.message;
      }
    })
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>
<style >
@import url("../../assets/user-style/HomePage.css");
</style>