<template>
   <div class="DD-container">
  <div class="top">
     <h3>专业资料</h3>
     
     <span></span>
  </div>
  <div class="center">
      <h3>通用资料</h3>
  </div>
  <div class="bottom">
    <h3>其他</h3> 
  </div>
   </div>
</template>
<script>
export default {
    name:'DataDownload',
    data(){
       return{
          datainfo:[
             {
                Dataname:"java",
                Datadescribe:'javatest',
                
             }
          ]
       }
    }
}
</script>

<style scoped>
@import url('../../assets/user-style/DataDownload.css');

</style>