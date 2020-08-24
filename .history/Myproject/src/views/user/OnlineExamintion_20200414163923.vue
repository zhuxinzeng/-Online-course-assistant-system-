<template>
  <!-- 考试 -->
      <div class="examination">
        <ul v-for="(item,i) in examinationData" :key="i">
          <div>{{i+1}}、{{item.question}}</div>
          <li v-for="(son,index) in item.answer" :key="index">
            <el-radio
              v-model="radio[i]"
              :label="son.value"
              :name="son.name"
              @change="getIputValue(i)"
            ></el-radio>
          </li>
        </ul>
      </div>
      <!-- 考试 -->

</template>
<script>
export default {
    name:' OnlineExamintion',
    data(){
        return{
            examinationData: [
        {
          id: "1",
          name: "one",
          question:
            "课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握",
          answer: [
            { value: "A.Python" },
            { value: "B.Vue" },
            { value: "C.Php" },
            { value: "D.Java" }
          ]
        },
        {
          id: "1",
          name: "two",
          question:
            "课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握",
          answer: [
            { value: "A.问题一" },
            { value: "B.Vue2" },
            { value: "C.Php2" },
            { value: "D.Java2" }
          ]
        },
        {
          id: "1",
          name: "three",
          question:
            "课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握",
          answer: [
            { value: "A.问题二" },
            { value: "B.Vue3" },
            { value: "C.Php3" },
            { value: "D.Java3" }
          ]
        },
        {
          id: "1",
          name: "four",
          question:
            "课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握",
          answer: [
            {
              value:
                "A.课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握课堂管理讲师对课堂气氛的掌握"
            },
            { value: "B.Vue4" },
            { value: "C.Php4" },
            { value: "D.Java4" }
          ]
        },
        {
          id: "1",
          name: "five",
          question: "How about your in skills?",
          answer: [
            { value: "A.问题四" },
            { value: "B.Vue5" },
            { value: "C.Php5" },
            { value: "D.Java5" }
          ]
        }
      ],
      allRadio: [],//提交给后台的真题数据
      radio: []//单选真题答案

        }
    },
    methods:{
        getIputValue(index) {
      // console.log(index + 1 + "题" + this.radio);
      this.allRadio[index] = this.radio[index]; // 将数据存入提交给后台的数据中
      console.log(this.allRadio);
      // console.log(this.radio)
    }

    }
}
</script>