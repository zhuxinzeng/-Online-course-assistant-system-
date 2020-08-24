<template>
  <div class="KN-container">
    <div class="KN-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="专业能力" key="1">
          <div class="KN-content">
            <section>
              <h2>编程语言</h2>
              <div class="list">
                <div class="progress">
                  <a href>
                    <span>C语言</span>
                       共 100题
                 
                  
                  </a>
                  <p></p>
                </div>

                <div class="progress">
                  <a href>
                    <span>C++</span>
                       共 100题
                    
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Java</span>
                       共 20题
                   
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Javascript</span>
                       共 60题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Python</span>
                       共 34题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Go</span>
                       共 40题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>C#</span>
                       共 58题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>PHP</span>
                       共 76题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>ASP</span>
                       共 56题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>HTML</span>
                       共 45题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Swift</span>
                       共 80题
                  </a>
                </div>
                <div class="progress">
                  <a href>
                    <span>Shell</span>
                       共 100题
                  </a>
                </div>
              </div>
            </section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="通用能力" key="2" forceRender>
          <div class="classlist">
            <div class="listrow" v-for="(item , index) in coursesallInfo" :key="index">
              <coursesdetailinfo
                :_id="item._id"
                class="listrowspace"
                :name="item.TEACHER_NAME"
                :college="item.TEACHER_COLLEGE"
                :number="item.COURSE_NUMBER"
                :coursename="item.COURSE_NAME"
                :room="item.COURSE_ROOM"
                :img="item.COURSE_IMAGE"
                :avator="item.TEACHER_AVATOR"
              ></coursesdetailinfo>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane tab key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "KnowledgeDetection"
};
</script>
<style  scoped>
@import url("../../assets/user-style/KnowledgeDetection.css");
</style>