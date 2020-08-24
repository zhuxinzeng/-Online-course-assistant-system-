<template>
  <div class="T-container">
      <div v-for="(item,index) in Test"   :key="index">
         ({{item.Topictypes}})
        {{item.Testsequence}}
        {{item.Testtitle}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
          <a-row>
            <a-radio-group>
              <a-col :span="10" class="optionspace">
                <a-radio
                  value="A"
                  @change="onChange"
                  :disabled="Disable"
                >A.{{item.options_list[0].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace">
                <a-radio
                  value="B"
                  @change="onChange"
                  :disabled="Disable"
                >B.{{item.options_list[1].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace" v-if="item.options_list[2].options_title">
                <a-radio
                  value="C"
                  @change="onChange"
                  :disabled="Disable"
                >C.{{item.options_list[2].options_title}}</a-radio>
              </a-col>
              <a-col :span="10" class="optionspace" v-if="item.options_list[3].options_title">
                <a-radio
                  value="D"
                  @change="onChange"
                  :disabled="Disable"
                >D.{{item.options_list[3].options_title}}</a-radio>
              </a-col>
            </a-radio-group>

            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          </a-row>
        </div>
        <div>
          <a-button class="EXD-btn" id="sure" :disabled="showsure">
            <p>
              <b>确定</b>
            </p>
          </a-button>
        
          {{result}}
        </div>

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
           Testname:this.Testname
        }
    }).then(response=>{
        console.log(response)
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
