<template>
  <div class="BA-container">
    <div class="BA-nav">
      <div class="nav-info">
        <img src="../../assets/image/头像.jpg" alt />
        <a-rate :defaultValue="rate" allowHalf disabled></a-rate>
      </div>
    </div>
    <div class="BA-tabs">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="学习勋章" key="1">
          <div class="grade">
            <img src="../../assets/image/小学生.png" alt />
            <a-rate :defaultValue="rate1" allowHalf disabled class="rate"></a-rate>
            <span>小学生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/初中生.png" alt />
            <a-rate :defaultValue="rate2" allowHalf disabled class="rate"></a-rate>
            <span>初中生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/高中生.png" alt />
            <a-rate :defaultValue="rate3" allowHalf disabled class="rate"></a-rate>
            <span>高中生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/大学生.png" alt />
            <a-rate :defaultValue="rate4" allowHalf disabled class="rate"></a-rate>
            <span>大学生</span>
          </div>
          <div class="grade">
            <img src="../../assets/image/研究生.png" alt />
            <a-rate :defaultValue="rate5" allowHalf disabled class="rate"></a-rate>
            <span>研究生</span>
          </div>
        </a-tab-pane>
        <!-- <a-tab-pane tab="考试能力" key="2" forceRender>
          <div class="grade">
            <img src="../../assets/image/分数-c-.png" alt />
            <a-rate :defaultValue="rate" allowHalf disabled class="rate"></a-rate>
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
        </a-tab-pane> -->
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
      rate1: "",
      rate2: "",
      rate3: "",
      rate4: "",
      rate5: "",
      rate6: ""
    };
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
        if (response.data.code == 200) {
          let rate = response.data.message;
          if (rate < 10) {
            this.rate1 = rate;
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