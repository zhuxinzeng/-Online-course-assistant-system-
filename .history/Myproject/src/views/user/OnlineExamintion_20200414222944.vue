<template>
<div class="OE-container" >
     <Nav/>
    <div class="nav">

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
.OE-content{
  width: 100%;
background: #F6F6F6;
} 
.nav{
  width: 80%;
  height: 100px;
  margin:0 auto;
  border: 1px solid red;

}
</style>