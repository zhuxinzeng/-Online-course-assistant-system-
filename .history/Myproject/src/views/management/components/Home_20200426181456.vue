<template>
    <div class="wrapper">
        <vHead></vHead>
       <v-sidebar></v-sidebar>
       <div class="content">  3333</div>
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
.content{
   width: 200px;
   height: 20px;
    border: 1px solid red; 
   
}

</style>