<template>
    <div class="wrapper">
        <vHead></vHead>
       <v-sidebar></v-sidebar>
       <div class="content"></div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created() {
     
    }
};
</script>
<style >
.content-box{
  display: flex;

  
}
.content{
    display: flex;
    flex-direction: column;
    position: relative;
    left: -315px;  
    width: 100%;
    height: 100px;
    margin-left: 85px;
    border: 1px solid red; 
   
}

</style>