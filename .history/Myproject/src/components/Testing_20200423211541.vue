<template>
  <div class="T-container">ggfgf
      <div v-for="(item,index) in Test"   :key="index">
    

      </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../serviceAPI.config";
export default {
    name:'',
    components:{},
    data(){
        return {
            Test:[],
            Testname:"Javascript"
        }
    },
    created(){
    axios({
        url:url.getTestinfo,
        method:'post',
        data:{
           Testname:Testname
        }
    }).then(response=>{
        if(response.status == 200){
            this.Test = response.data.message;
        }
    })
    
    
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
