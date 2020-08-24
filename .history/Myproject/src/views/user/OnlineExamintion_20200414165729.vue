<template>
  <div>
    <h3>承包商作业风险分析矩阵</h3>
    <a-divider/>
    <div v-for="(item,index) in list" :key='index'>
      <p class="tit1" style="color: #000 !important;">{{index + 1}}.{{item.optionName}}</p>
      <a-radio-group @change="onChange">
        <div v-for="(item1,index) in item.listRiskAssessment" :key='index'>
          <a-radio :style="radioStyle" :id="item.optionScore.toString()" :value="item1.optionScore">
            {{item1.optionName}}
          </a-radio>
        </div>
      </a-radio-group>
      <a-divider/>
    </div>
    <a-button @click="submit" type="primary" style="margin:10px auto;display: block;">提交</a-button>
  </div>

</template>
<script>
  var myMap = new Map();
  export default {
    name: '',
    data() {
      return {
        value: 0,
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
        list: [],//题库
        riskId: [],//选项id
        optionScoreStr: [],//选项分值
      }
    },
    props: ['pid'],
    mounted() {
      this.question()

    },
    methods: {
      onChange(e) {
        myMap.set(e.target.id, e.target.value);
      },
      question() {
        this.$get('risk_assessment/listriskAsse').then((r) => {
          let data = r.data
          this.list = data
          console.log(data);
        })
      },
      submit() {
        for (var [key, value] of myMap.entries()) {
          console.log({key: key, value: value});
          this.riskId.push(key)
          this.optionScoreStr.push(value)
        }
        if (this.riskId.length < this.list.length) {
          this.$message.error('题目还未答完')
          return false
        }
//        console.log(this.pid);
//        console.log(this.riskId.toString());
//        console.log(this.optionScoreStr.toString());
        this.$post('riskAssess_result/saveRiskAsseResult', {
          pId: this.pid,
          riskId: this.riskId.toString(),
          optionScoreStr: this.optionScoreStr.toString(),
        }).then((r) => {
          console.log(r);
          if (r.status == 200) {
            this.$message.warning('提交成功')
            window.location.reload()
          }
        })
      }
    },
  }
</script>
<style scoped>
  h3 {
    text-align: center;
    font-weight: bold;
  }

  .sub {
    display: block;
    margin: 20px auto;
  }

  .tit1 {
    font-weight: bold;
  }
</style>
