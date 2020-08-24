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
    props:["ques_sequence","ques_title","options_list"],
     data() {
    return {
     
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

</style>