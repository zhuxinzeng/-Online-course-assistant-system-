<template>
    <div class="CD-container">
        <div class="img">
            <img src="" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import url from '../serviceAPI.config'


export default {
    data(){
          return {
            ID:'',
            coursesinfo:{},
       }
    },
    create(){
        
     this.ID=this.$route.query.ID?this.$route.query.ID:this.$route.params.ID;
     console.log(ID);
     this.getInfo()
    },
     
    method:{
   getInfo(){
       axios({
           url:url.getcoursesallInfo,
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