<template>
  
  <div>
         {{ques_sequence}}
        {{ques_title}}
        <!-- {{item.options_list}} -->
        <!-- <div v-for="(items,index) in item.options_list" :key="index"> -->
        <div class="content-option">
          <a-row>
            <a-col :span="12" class="optionspace">
              <a-checkbox
                value="A"
                @change="onChange"
                :disabled="Disable"
            
              >A.{{options_list[0].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox
                value="B"
                @change="onChange"
                :disabled="Disable"
               
                
              >B.{{options_list[1].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox
                value="C"
                @change="onChange"
                :disabled="Disable"
             
              >C.{{options_list[2].options_title}}</a-checkbox>
            </a-col>
            <a-col :span="12" class="optionspace">
              <a-checkbox
                value="D"
                @change="onChange"
                :disabled="Disable"
               
              >D.{{options_list[3].options_title}}</a-checkbox>
            </a-col>

            <!-- <a-button class="EXD-btn" >
              <p @click="change()" :indeterminate="indeterminate" >重新选择</p>
            </a-button>-->
          </a-row>
        </div>
        <div>
          <a-button @click="getresult()" class="EXD-btn" id="sure" :disabled='showsure'>
            <p >
              <b>确定</b>
            </p>
          </a-button>
          <a-button @click="next" class="EXD-btn">
            <p @click="getdata()">
              <b>下一题</b>
            </p>
          </a-button>
          {{result}}
          
        </div>
  </div>
</template>

<script>
export default {
    name:'',
    props:["ques_sequence","ques_title","options_list"]

}
</script>

<style>

</style>