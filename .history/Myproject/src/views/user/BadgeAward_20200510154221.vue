<template>
  <div class="BA-container">
    <div class="BA-nav">
      <div class="nav-info">
        <img src="../../assets/image/头像.jpg" alt />
        <a-rate v-model="rate"  disabled></a-rate>
      </div>
    </div>
    <div class="BA-tabs">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="学习勋章" key="1">
          <div class="grade">
            <img src="../../assets/image/小学生.png" alt />
            <a-rate v-model="rate1"  disabled class="rate"></a-rate>
            <span>小学生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/初中生.png" alt />
            <a-rate v-model="rate2"  disabled class="rate"></a-rate>
            <span>初中生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/高中生.png" alt />
            <a-rate v-model="rate3"  disabled class="rate"></a-rate>
            <span>高中生</span>{{rate3}}
          </div>
          <div class="grade">
            <img src="../../assets/image/大学生.png" alt />
            <a-rate v-model="rate4"  disabled class="rate"></a-rate>
            <span>大学生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/研究生.png" alt />
            <a-rate v-model="rate5"  disabled class="rate"></a-rate>
            <span>研究生</span>
          </div>
        </a-tab-pane>
        <!-- <a-tab-pane tab="考试能力" key="2" forceRender>
          <div class="grade">
            <img src="../../assets/image/分数-c-.png" alt />
            <a-rate v-model="rate"  disabled class="rate"></a-rate>
            <span>考畜</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/分数-c+.png" alt />
            <a-rate :defaultValue="rate" allowHalf disabled class="rate"></a-rate>
            <span>考渣</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/B.png" alt />
            <a-rate :defaultValue="rate" allowHalf disabled class="rate"></a-rate>
            <span>考生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/分数-A-.png" alt />
            <a-rate :defaultValue="rate" allowHalf disabled class="rate"></a-rate>
            <span>考霸</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/分数-A+.png" alt />
            <a-rate :defaultValue="rate" allowHalf disabled class="rate"></a-rate>
            <span>考神</span>
          </div>
        </a-tab-pane>-->
      </a-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import url from "../../serviceAPI.config";

export default {
  name: "BadgeAward",
  props: "",
  components: {},
  data() {
    return {
        rate:this.rate,
      rate1:this.rate1,
      rate2:this.rate2,
      rate3:this.rate3,
      rate4:this.rate4,
      rate5:this.rate5
    };
  },
  created() {
    this.getrate();
  },

  methods: {
    callback(key) {
      console.log(key);
    },
    getrate() {
      axios({
        url: url.getrate,
        method: "post",
        data: {
          name: sessionStorage.getItem("userName")
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200) {
          let medal = response.data.message[0].medal;
          console.log(medal)
          let halfmedal = medal / 2;
          console.log(halfmedal)
          if (halfmedal < 5 && halfmedal ==5) {    //medal: 1-10之间   half: 1-5之间
            this.rate1 = halfmedal;
            this.rate2 = 0;
            this.rate3 = 0;
            this.rate4 = 0;
            this.rate5 = 0;
            this.rate=1;
          } else if (halfmedal > 5 || halfmedal < 10 && halfmedal == 10) {  // medal: 10-20 之间   half: 5-10之间
            this.rate1 = 5;
            this.rate2 = halfmedal-5;
            this.rate3 = 0;
            this.rate4 = 0;
            this.rate5 = 0;
            this.rate=2;
          }else if (halfmedal > 10 || halfmedal < 15 && halfmedal == 15) {  // medal: 20-30之间  half: 10-15之间
            this.rate1 = 5;
            this.rate2 = 5;
            this.rate3 = halfmedal-10;
            this.rate4 = 0;
            this.rate5 = 0;
            this.rate=3;
          }else if (halfmedal > 15 || halfmedal < 20 && halfmedal == 20) { // medal: 30-40之间  half: 15-20
            this.rate1 = 5;
            this.rate2 = 5;
            this.rate3 = 5;
            this.rate4 = halfmedal-15;
            this.rate5 = 0;
            this.rate=4;
          }else if (halfmedal > 20 || halfmedal < 25 && halfmedal == 25) { // medal: 40-50 之间  half: 20-25
            this.rate1 = 5;
            this.rate2 = 5;
            this.rate3 = 5;
            this.rate4 = 5;
            this.rate5 = halfmedal-20;
            this.rate=5;
          }
          
        }
      });
    }
  }
};
</script>
<style scoped>
@import url("../../assets/user-style/BadgeAward.css");
</style>