<template>
<div class="UI-container" >
    <Nav></Nav>
    <div class="warpper">
    <div class="UI-content">
         <Sidenav></Sidenav>
         
    </div>
   
   </div>
    
</div>
</template>

<script>
import Sidenav from '../../components/sidenav.vue';
import Nav from '../../components/nav.vue'

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
<style  scoped>
@import  "../../assets/user-style/UserIndex.css"; 

</style>