<template>
    <div class="CD-container">
        <div class="img">
            <img :src="COURSE_IMAGE" alt="">
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
               this.ID=response.data.message
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