<template>
  <div class="T-container">ggfgf
      <div v-for="(item,index) in Test"   :key="index">
    

      </div>
  </div>
</template>

<script>
export default {
    name:'',
    components:{},
    data(){
        return {
            Test:[],
        }
    }

}
</script>

<style>
.T-container{
     width: 90%;
     height: 900px;
     margin:20px auto;
    min-width: 900px;
    border-radius: 10px;
    background: #cecece;
}
</style>
