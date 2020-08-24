<template>
  <div class="KN-container">
    <div class="KN-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="专业能力" key="1">
          <div class="KN-content">
            <section><h2>编程语言</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="/Testing">
                    <a-radio>Javascript</a-radio>
                    共 15题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                    <span>C++</span>
                    共 20题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Java</span>
                    共 20题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>C语言</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Python</span>
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Golong</span>
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>C#</span>
                    共 58题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>PHP</span>
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>ASP</span>
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>HTML</span>
                    共 45题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Swift</span>
                    共 80题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Shell</span>
                    共 90题
                  </router-link>
                </div>
              </div>
              </section>
            <section> <h2>计算机基础</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                    <span>算法</span>
                    共 20题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                    <span>数据结构</span>
                    共 35题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>组成原理</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>计算机网络</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>网络基础</span>
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>mysql</span>
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Linux</span>
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>mongoDB</span>
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>二叉树</span>
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>数组</span>
                    共 85题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>排序</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>操作系统</span>
                    共 30题
                  </router-link>
                </div>
              </div>  </section>
            <section> <h2>机器学习</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Hadoop</span>
                    共 30题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                    <span>数据挖掘</span>
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Spark</span>
                    共 30题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Hive</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>人脸识别</span>
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>数理统计</span>
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>深度学习</span>
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>组合数学</span>
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>概率统计</span>
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>图像处理</span>
                    共 45题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>Zookeeper</span>
                    共 80题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>视觉处理</span>
                    共 90题
                  </router-link>
                </div>
              </div>  </section>
            <section>  <h2>软件工程</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                    <span>软件工程</span>
                    共 40题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                    <span>UML</span>
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>软件测试</span>
                    共 30题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>设计模式</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>windows</span>
                    共 38题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>调试工具</span>
                    共 4题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>并发</span>
                    共 8题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>运维</span>
                    共 70题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>工程原理</span>
                    共 36题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>工程模型</span>
                    共 15题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>工程方法</span>
                    共 10题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                    <span>工程管理</span>
                    共 20题
                  </router-link>
                </div>
              </div> </section>
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="通用能力" key="2" forceRender>
          <div class="KN-content">
            <section>
              <h2>学习能力</h2>
              <div class="list">
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>英语考察</span>
                    共 100题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress two">
                  <router-link to="HomePage">
                    <span>高等数学</span>
                    共 100题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>概率论</span>
                    共 20题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>互联网常识</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>管理学</span>
                    共 34题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>心理学</span>
                    共 40题
                  </router-link>
                </div>
              </div>
            </section>
            <section>
              <h2>行测</h2>
              <div class="list">
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>常识判断</span>
                    共 30题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress two">
                  <router-link to="HomePage">
                    <span>资料分析</span>
                    共 100题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>智力题</span>
                    共 20题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>数量关系</span>
                    共 60题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>判断推理</span>
                    共 34题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                    <span>言语理解</span>
                    共 40题
                  </router-link>
                </div>
              </div>
            </section>
          </div>
        </a-tab-pane>
        <a-tab-pane tab key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "KnowledgeDetection",
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>
<style  scoped>
@import url("../../assets/user-style/KnowledgeDetection.css");
</style>