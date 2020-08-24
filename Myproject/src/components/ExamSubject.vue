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
         <div class="btn-section">
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
import axios from "axios";
import url from "../serviceAPI.config";
export default {
  
    name:'',
    props:[],
     data() {
    return {
       examinfo: [],
      _id: "",
      number: 1,
      answer: "",
      result: 0,
    //   disabled: false,
      indeterminate: true,
      Disable: false,
      showsure:false,
    };
  }, 
  mounted() {
    this.getdata();
   this.next();
   
    
  },
  methods:{
       getdata(number) {
        var btn = document.getElementById('sure')
        // btn.disabled=true;
    // console.log("btn:"+btn.checked)
      this.Disable = false;
      number = this.number;
      console.log("这个是number:" + number);
      axios({
        url: url.getexamallInfo,
        method: "post",
        data: {
          number: number
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.examinfo = response.data.message;
          this._id = this.examinfo[0]._id;
          this.$store.commit("saveExaminfo", this.examinfo);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.showsure = false;
     
    },

    getresult() {
      console.log("得到成绩的_id：" + this._id);
      console.log("得到成绩的answer：" + this.answer);
      axios({
        url: url.getresult,
        method: "post",
        data: {
          _id: this._id,
          answer: this.answer
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          this.grade = response.data.message;
          this.result = this.result + this.grade;
          //   this.$message.success("后台传回_" + this.grade);
          this.$store.commit("savegrade", this.grade);
        } else {
          this.$message.error("服务器端错误！");
        }
      });
      this.Disable = true;
      this.showsure = true;
    },
    onChange(checkedValues) {
      console.log("这个是选中的值为 = ", checkedValues.target.value);
      this.answer = checkedValues.target.value;
      console.log("这个是answer:" + this.answer);
      this.$emit('getresult',this.answer)
      console.log(`checked = ${checkedValues.target.checked}`);
      checkedValues.target.checked=false
    },

    next() {
    
    // console.log("btn:"+btn.checked)
      this.number++;
      console.log(this.number);
    },
  }
}
</script>

<style>
 .EXD-content {
  width: 100%;
  height: 400px;
  margin-top: 120px;
  padding: 85px;
  background: #dee3e2;
  border-radius: 10px;
}
 .EXD-content .content-option {
  margin-top: 10px;
  padding: 20px;
  height: 180px;
  
}
 .EXD-content .content-option .optionspace {
  margin-top: 20px;
}

  .EXD-content .EXD-btn {
  
  margin-left: 20px;
  box-shadow: 0 0 2px;
 
}

 .EXD-content .EXD-btn p {
  width: 90px;
  margin-left: 10px;
  margin: 0 auto;
}
</style>