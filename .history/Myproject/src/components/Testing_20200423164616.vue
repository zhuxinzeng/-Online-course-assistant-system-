<template>
  <div class="T-container">ggfgf
      <div v-for="(item,index) in Test"   :key="index">
       1221

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
     width: 95%;
    min-width: 900px;
    border-radius: 10px;
    background: #cecece;
}
</style>
