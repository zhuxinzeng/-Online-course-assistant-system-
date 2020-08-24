<template>
  <div class="KN-container">
    <div class="KN-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="专业能力" key="1">
          <div class="KN-content">
            <section><h2>编程语言</h2>
             <a-radio-group @change="onChange()" v-model="value">
              <div class="list">
               
                <div class="progress">
                  <router-link to="/Testing">
                    <a-radio  value="Javascript" class="title"/>Javascript
                    共 15题
                  </router-link>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                     
                    C++
                    共 20题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Java
                    共 20题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    C语言
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Python
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Golong
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    C#
                    共 58题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    PHP
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    ASP
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    HTML
                    共 45题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Swift
                    共 80题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Shell
                    共 90题
                  </router-link>
                </div>
               
              </div>
               </a-radio-group>
              </section>
            <section> <h2>计算机基础</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    算法
                    共 20题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    数据结构
                    共 35题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    组成原理
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    计算机网络
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    网络基础
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    mysql
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Linux
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    mongoDB
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    二叉树
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    数组
                    共 85题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    排序
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    操作系统
                    共 30题
                  </router-link>
                </div>
              </div>  </section>
            <section> <h2>机器学习</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Hadoop
                    共 30题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    数据挖掘
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Spark
                    共 30题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Hive
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    人脸识别
                    共 34题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    数理统计
                    共 40题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    深度学习
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    组合数学
                    共 76题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    概率统计
                    共 56题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    图像处理
                    共 45题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    Zookeeper
                    共 80题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    视觉处理
                    共 90题
                  </router-link>
                </div>
              </div>  </section>
            <section>  <h2>软件工程</h2>
              <div class="list">
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    软件工程
                    共 40题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    UML
                    共 50题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    软件测试
                    共 30题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    设计模式
                    共 60题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    windows
                    共 38题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    调试工具
                    共 4题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    并发
                    共 8题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    运维
                    共 70题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    工程原理
                    共 36题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    工程模型
                    共 15题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    工程方法
                    共 10题
                  </router-link>
                </div>
                <div class="progress">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    工程管理
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
                     <a-radio class="title"/>
                    英语考察
                    共 100题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    高等数学
                    共 100题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    概率论
                    共 20题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    互联网常识
                    共 60题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    管理学
                    共 34题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    心理学
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
                     <a-radio class="title"/>
                    常识判断
                    共 30题
                  </router-link>
                  <p></p>
                </div>

                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    资料分析
                    共 100题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    智力题
                    共 20题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    数量关系
                    共 60题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    判断推理
                    共 34题
                  </router-link>
                </div>
                <div class="progress two">
                  <router-link to="HomePage">
                     <a-radio class="title"/>
                    言语理解
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
    return {
      value:Javascript,
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onChange(e){
  console.log('radio checked', e.target.value);


    }
  }
};
</script>
<style  scoped>
@import url("../../assets/user-style/KnowledgeDetection.css");
</style>