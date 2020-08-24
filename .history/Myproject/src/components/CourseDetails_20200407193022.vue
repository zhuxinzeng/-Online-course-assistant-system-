<template>
    <div class="CD-container">
        <div class="img">
            <img :src="coursesinfo.COURSE_IMAGE" alt="课程" style=" width: 350px;height: 310px;">
        </div>
        <div class="Info">
        <div class="name">  
           <b> {{coursesinfo.COURSE_NAME}}   </b>  
        </div>
         <div class="teacher">
          <i>授课教师： </i> <b> {{coursesinfo.TEACHER_NAME}}</b>
          <i>所属学院：</i><b>{{coursesinfo.TEACHER_COLLEGE}}</b>
         <i> 上课地点：</i><b>{{ coursesinfo.COURSE_ROOM}}</b>
         </div>
         <div class="course">
            <i> 课程属性：</i><b>{{coursesinfo.COURSE_ATTRIBUTE}}</b> 
            <i> 课程学分：</i><b>{{coursesinfo.COURSE_CREDIT}}</b>
             
         </div>
         <div class="time">
            <i> 开始时间：</i><b>{{coursesinfo.COURSE_START}}</b>
             <i>结束时间：</i><b>{{coursesinfo.COURSE_END}}</b>
             <i>考试时间：</i><b>{{coursesinfo.COURSE_TESTTIME}}</b>
         </div>
         <div class="btn">
             <a-button size="large">
                 加入课程
             </a-button>
             <a-button  size="large" @click="goback" class="back-btn">返回上级</a-button>
         </div>
           </div>
       
    </div>
</template>
<script>
import axios from 'axios'
import url from '../serviceAPI.config'


export default {
    data(){
          return {
           
        coursesinfo:{},
       }
    },
    created(){
        
     this.ID=this.$route.query.ID?this.$route.query.ID:this.$route.params.ID;
     console.log(this.ID);
     this.getInfo()
    },
     
    methods:{
   getInfo(){
       axios({
           url:url.getcourseInfo,
           method:'post',
           data:{
               ID:this.ID
           }
       })
       .then(response=>{
           if(response.status==200 && response.data.message){
               this.coursesinfo=response.data.message
           }else{
               Toast('服务器错误，数据获取失败！ ')
           }
           console.log(this.ID)
       })
       .catch(error=>{
           console.log(error)
       })
   }

    },
    goback(){
        this.$router.go(-1)
    }

    
}
</script>
<style>
@import url('../assets/user-style/CourseDetails.css');
</style>