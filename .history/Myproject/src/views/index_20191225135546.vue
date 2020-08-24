<template>
  <div class="ID-container">
    <!--导航栏-->
    <div class="ID-nav">
      <div class="logo">
        <img src="../assets/image/logo.png" alt />
      </div>
      <div class="info">
        <a @click="login">注册/登录</a>
        <a>联系我</a>
        <p>国际化</p>
      </div>
    </div>
    <!--内容区域-->
    <div class="ID-content">
      <div class="swiper-container">
        <!--轮播图片-->
        <a-carousel autoplay>
          <div class="swiper1">
            <transition enter-active-class="animated zoomInDown">
              <p v-show="swiper_title">Online Course Assistance</p>
            </transition>
            <transition enter-active-class="animated zoomInUp">
              <div v-show="swiper_smalltitle" class="title">
                <span>开放</span>
                <span>智能</span>
                <span>创新</span>
              </div>
            </transition>
            <img src="../assets/image/swiper1.jpg" style="height;100px;" alt />
          </div>
          <div class="swiper2">
            <transition enter-active-class="animated zoomInDown">
              <p v-show="swiper_title">Online Course Assistance</p>
            </transition>
            <transition enter-active-class="animated zoomInUp">
              <div v-show="swiper_smalltitle" class="title">
                <span>开放</span>
                <span>智能</span>
                <span>创新</span>
              </div>
            </transition>
            <img src="../assets/image/swiper2.jpg" alt />
          </div>
          <div class="swiper3">
            <transition enter-active-class="animated zoomInDown">
              <p v-show="swiper_title">Online Course Assistance</p>
            </transition>
            <transition enter-active-class="animated zoomInUp">
              <div v-show="swiper_smalltitle" class="title">
                <span>开放</span>
                <span>智能</span>
                <span>创新</span>
              </div>
            </transition>
            <img src="../assets/image/swiper3.jpg" alt />
          </div>
        </a-carousel>
      </div>

      <!--简介卡片-->
      <div class="Stance"></div>
      <transition enter-active-class="animated flipInX ">
        <div class="box-card" v-show="show_All">
          <div class="card-top">
            <h3>
              <i>交互式课堂辅助系统</i>
            </h3>
            <h4>专注于提升课堂学习效率</h4>
          </div>
          <div class="card-bottom">
            <div class="student">
              <img src="../assets/image/用户.png" alt />
              <span>用户端</span>
            </div>
            <div class="admin">
              <img src="../assets/image/管理.png" alt />
              <span>管理端</span>
            </div>
          </div>
        </div>
      </transition>

      <!--详情卡片标题-->
      <transition enter-active-class="animated fadeInDownBig">
        <p v-show="show_title" class="show-title">教学社区功能展示</p>
      </transition>
      <transition enter-active-class="animated zoomInUp ">
        <span v-show="show_small_title" class="show-small-title">交互式智能辅助</span>
      </transition>
      <!--详情卡片-->
      <!--第一行-->
      <div class="carddetails row-1">
        <transition enter-active-class="animated slideInLeft">
          <div class="carddetails-left" v-show="carddetailsL_1_show">
            <div class="box-carddetails left-1">
              <img src="../assets/image/box-img.jpg" alt />
              <h2 align="center" class="carddetails-h2">重要学科覆盖</h2>
              <h5 align="center" class="carddetails-h5">满足不同学科需求</h5>
              <div class="carrdetails-span-row1">
                <span>C语言</span>
                <span>Java</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>大学英语</span>
                <span>高等数学</span>
              </div>
            </div>
            <div class="box-carddetails left-2">
              <img src="../assets/image/box-img.jpg" alt />
              <h2 align="center" class="carddetails-h2">难点知识检测</h2>
              <h5 align="center" class="carddetails-h5">针对性训练</h5>
              <div class="carrdetails-span-row1">
                <span>指针</span>
                <span>面向对象</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>六级词汇</span>
                <span>公式推算</span>
              </div>
            </div>
          </div>
        </transition>
        <transition enter-active-class="animated slideInRight">
          <div class="carddetails-right" v-show="carddetailsR_1_show">
            <div class="box-carddetails right-1">
              <img src="../assets/image/box-img2.jpg" alt />
              <h2 align="center" class="carddetails-h2">课程信息管理</h2>
              <h5 align="center" class="carddetails-h5">按需管理课程</h5>
              <div class="carrdetails-span-row1">
                <span>添加</span>
                <span>删除</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>编辑课程</span>
                <span>查找课程</span>
              </div>
            </div>
            <div class="box-carddetails right-2">
              <img src="../assets/image/box-img2.jpg" alt />
              <h2 align="center" class="carddetails-h2">题库信息管理</h2>
              <h5 align="center" class="carddetails-h5">在线答题做题</h5>
              <div class="carrdetails-span-row1">
                <span>添加</span>
                <span>删除</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>发布作业</span>
                <span>发布考试</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!--第二行-->
      <div class="carddetails row-2">
        <transition enter-active-class="animated slideInLeft">
          <div class="carddetails-left" v-show="carddetailsL_2_show">
            <div class="box-carddetails left-1">
              <img src="../assets/image/box-img.jpg" alt />
              <h2 align="center" class="carddetails-h2">查看课程信息</h2>
              <h5 align="center" class="carddetails-h5">了解课程动态</h5>
              <div class="carrdetails-span-row1">
                <span>学分</span>
                <span>考试课程</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>绩点分数</span>
                <span>难度等级</span>
              </div>
            </div>
            <div class="box-carddetails left-2">
              <img src="../assets/image/box-img.jpg" alt />
              <h2 align="center" class="carddetails-h2">在线答疑解惑</h2>
              <h5 align="center" class="carddetails-h5">知之为知之</h5>
              <div class="carrdetails-span-row1">
                <span>提问</span>
                <span>老师解惑</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>同学探讨</span>
                <span>举一反三</span>
              </div>
            </div>
          </div>
        </transition>
        <transition enter-active-class="animated slideInRight">
          <div class="carddetails-right" v-show="carddetailsR_2_show">
            <div class="box-carddetails right-1">
              <img src="../assets/image/box-img2.jpg" alt />
              <h2 align="center" class="carddetails-h2">课程公告管理</h2>
              <h5 align="center" class="carddetails-h5">发布最新动态</h5>
              <div class="carrdetails-span-row1">
                <span>时间</span>
                <span>上课教室</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>考试时间</span>
                <span>考试教室</span>
              </div>
            </div>
            <div class="box-carddetails right-2">
              <img src="../assets/image/box-img2.jpg" alt />
              <h2 align="center" class="carddetails-h2">信息统计分析</h2>
              <h5 align="center" class="carddetails-h5">分析课程</h5>
              <div class="carrdetails-span-row1">
                <span>学生数</span>
                <span>课程统计</span>
              </div>
              <div class="carrdetails-span-row2">
                <span>测试分数统计</span>
                <span>难度统计</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!--宣传部分-->
    <div class="ID-propaganda">
      <transition enter-active-class="animated zoomIn ">
        <h1 v-show="show_propaganda_title">信息技术推动教育进步</h1>
      </transition>
      <transition enter-active-class="animated">
        <h3 v-show="show_propganda_smallTitle">教育的每一点进步，都需要几代人的努力</h3>
      </transition>
      <!--宣传卡片-->
      <transition enter-active-class="animated fadeInLeftBig">
        <div class="Box-propaganda first" v-show="propganda_box_1">
          <div class="B-left">
            <img src="../assets/image/宣传-1.jpg" alt />
          </div>
          <div class="B-right">
            <h2>予学生以能力</h2>
            <span>“提倡交互式教学，在教学活动中，师生平等，没有主配之分，亦师亦友，互相学习。”</span>
          </div>
        </div>
      </transition>
      <transition enter-active-class="animated fadeInRightBig ">
        <div class="Box-propaganda first" v-show="propganda_box_2">
          <div class="B-right Left">
            <h2>予教师以专业</h2>
            <span>“老师是设计师，不是演员。优秀的老师，将根据每个学生、每个班级情况调整课件，进行个性化教学。一个在线教室，需要 “逆互联网思维而行的勇气”。”</span>
          </div>
          <div class="B-left Right">
            <img src="../assets/image/宣传-2.jpg" alt />
          </div>
        </div>
      </transition>

      <transition enter-active-class="animated fadeInLeftBig ">
        <div class="Box-propaganda first" v-show="propganda_box_3">
          <div class="B-left">
            <img src="../assets/image/宣传-3.jpg" alt />
          </div>
          <div class="B-right">
            <h2>予知识以流动</h2>
            <span>“我们支持所有通用文档，只有联通人类已有知识库 才能有效地完成 人类知识的传递。”</span>
          </div>
        </div>
      </transition>
    </div>
    <!--网站底部-->
    <div class="ID-footer">
      <div class="footer-box Projectintroduction">
        <h2>项目介绍</h2>
        <span>Online Course Assistance 重点学科覆盖 ，多元化教学方式，在线考试，在线解答，海量教学资源分享，致力于服务高校的广大师生。</span>
      </div>
      <div class="footer-box T-support">
        <h2>技术支持</h2>
        <a href>Node.js</a>
        <a href>Vue</a>
        <a href>Mysql</a>
        <a href>Jquery</a>
      </div>
      <div class="footer-box Friendshiplink">
        <h2>友情链接</h2>
        <a href='https://github.com/zhuxinzeng'>Github </a>
        <a href>Gitee</a>
        <a href>阿里云</a>
        <a href>腾讯云</a>
      </div>
      <div class="footer-box Contact us">
        <h2>联系我</h2>
        <span>联系邮箱：xinzengzhu@gmail.com</span>
        <span>个人博客</span>
        <a href="www.zhuxinzeng.top">zhuxinzeng.top</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {},
  data() {
    return {
      swiper_title: true,
      swiper_smalltitle: true,
      show_All: false,
      show_title: false,
      show_small_title: false,
      carddetailsL_1_show: false,
      carddetailsR_1_show: false,
      carddetailsL_2_show: false,
      carddetailsR_2_show: false,
      show_propaganda_title: false,
      show_propganda_smallTitle: false,
      propganda_box_1: false,
      propganda_box_2: false,
      propganda_box_3: false
    };
  },
  mounted() {
    //动画
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight; // 设备/屏幕高度
      console.log("滚动高度" + clientHeight);
      let scrollObj = document.getElementById("box"); // 滚动区域
      let scrollTop = $(scrollObj).offsetTop; // box 到头部的距离
      let scrollHeight = $(window).scrollTop(); // 滚动条的滚动行程
      //滚动条滚动到对应的板块显示
      console.log("重要参考：" + scrollHeight);
      //导航栏背景色
      // if(scrollHeight < 70){
      //   $("#menubgfff").css('background','none');
      // }
      // if(scrollHeight > 70){
      //   $("#menubgfff").css('background','#FFF');
      // }
      //动画播放设置

      if (scrollHeight > 400) {
        this.show_All = true;
      }
      if (scrollHeight > 1000) {
        this.show_title = true;
      }
      if (scrollHeight > 1050) {
        this.show_small_title = true;
      }
      if (scrollHeight > 1300) {
        this.carddetailsL_1_show = true;
        this.carddetailsR_1_show = true;
      }
      if (scrollHeight > 1600) {
        this.carddetailsL_2_show = true;
        this.carddetailsR_2_show = true;
      }
      if (scrollHeight > 2000) {
        this.show_propaganda_title = true;
      }
      if (scrollHeight > 2300) {
        this.show_propganda_smallTitle = true;
      }
      if (scrollHeight > 2500) {
        this.propganda_box_1 = true;
      }

      if (scrollHeight > 2800) {
        this.propganda_box_2 = true;
      }
      if (scrollHeight > 3200) {
        this.propganda_box_3 = true;
      }
    },
    destroyed: function() {
      window.removeEventListener("scroll", this.handleScroll, false); //  离开页面清除（移除）滚轮滚动事件
    },
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
@import "../assets/user-style/index.css";
</style>