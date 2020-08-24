<template>
    <div class="CD-container">
        <div class="img">
            <img :src="coursesinfo.COURSE_IMAGE" alt="课程">
        </div>
        <div class="Info">
        <div class="name">  
           <b> {{coursesinfo.COURSE_NAME}}   </b>  
        </div>
         <div class="teacher">
          授课教师：   {{coursesinfo.TEACHER_NAME}}
          所属学院：{{coursesinfo.TEACHER_COLLEGE}}
          上课地点：{{ coursesinfo.COURSE_ROOM}}
         </div>
         <div></div>
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

    
}
</script>
<style>
@import url('../assets/user-style/CourseDetails.css');
</style>