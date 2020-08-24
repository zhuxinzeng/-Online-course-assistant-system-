<template>
<div class="OE-container" >
     <Nav/>
    <div class="top">
      
    </div>
  
</div>
</template>

<script>

import Nav from '../../components/nav.vue'
export default {
    name:'',
    props:'',
    components:{ Nav },
    data(){
        return {

        }
    },
    methods:{},
}
</script>
<style scoped>
.OE-container .top{
 width: 90%;
 height: 80px;
 margin: 10px auto;
 border: 1px solid red;

} 
/* .nav{
  width: 80%;
  height: 10px;
  margin:0 auto;
  border: 1px solid red;

} */
</style>