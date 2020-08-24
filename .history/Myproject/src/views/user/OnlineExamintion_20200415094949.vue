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
 margin: 20px auto;
 background: #F6F6F6;
 border-radius: 5%;
 box-shadow: 0 0 4px;


} 

</style>