<template>
<div class="Home-container" >
     <Nav/>
     <div class="Home-content">
   <sidenav/>
   </div>
  
</div>
</template>

<script>
import Sidenav from '../components/sidenav.vue';
import Nav from '../components/nav.vue'
export default {
    name:'',
    props:'',
    components:{Nav,Sidenav},
    data(){
        return {

        }
    },
    methods:{},
}
</script>
<style scoped>
@import url('../assets/user-style/Home.css');
.Home-container{
    width: 100%;
    min-width: 900px;
}
</style>