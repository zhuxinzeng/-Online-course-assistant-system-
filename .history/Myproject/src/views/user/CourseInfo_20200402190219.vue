<template>
  <div class="CI-container">
    <div class="CI-nav">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="必修课程" key="1">
          <div class="classlist">
            <div class="list-row">
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/高等数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" @click="countDown" />
                  <a-icon type="eye" @click="showDrawer" />
                </template>
                <a-card-meta title="朱重八" description="理学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/高等数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱重八" description="理学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/高等数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱重八" description="理学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/高等数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱重八" description="理学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
            <div class="list-row">
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="刘天" description="计算机学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="刘天" description="计算机科学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="刘天" description="计算机科学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="刘天" description="计算机科 学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </div>
        </a-tab-pane>
        <!--选修课程列表-->
        <a-tab-pane tab="选修课程" key="2" forceRender>
          <div class="classlist">
            <div class="list-row">
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/C语言.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="刘天" description="计算机科 学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱重八" description="计算机科 学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱老师" description="计算机科 学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
              <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="../../assets/image/数学.jpg"
                  slot="cover"
                  style="width:298px;height:165px;"
                />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="team" />
                  <a-icon type="eye" />
                </template>
                <a-card-meta title="朱老师" description="计算机科 学院" style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-card-meta>
              </a-card>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane tab key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
    <div class="footer">
      <div class="pagination">
        <a-pagination showQuickJumper v-model="current" :total="50"></a-pagination>
      </div>
      <a-button @change="onChange">确定</a-button>
    </div>
    <!--抽屉-->
    <a-drawer :closable="false" @close="onClose" :placement="placement" :visible="visible">
      <div class="CI-drawerinfo"

      >
        <h2><i>课程详细信息</i> </h2>
        <span>名称: <i> {{name}}</i></span>
        <span>学分:<i> {{credit}}</i></span>
        <span>课时:<i> {{Classhour}}</i></span>
        <span>授课老师:<i> {{teacher}}</i></span>
        <span>授课教室:<i> {{classroom}}</i></span>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import axios from 'axios'
import url from '../../serviceAPI.config'

export default {
  name: "CourseInfo",
  props: "",
  components: {},
  data() {
    return {
      current: 2,
      Number: 12,
      visible: false,
      placement: "right",

      name: "高等数学",
      credit: "3",
      Classhour: "32",
      teacher: "周丹",
      classroom: "3-201"
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },
    countDown() {
      let secondsToGo = 1;
      let number = this.Number;
      const modal = this.$success({
        title: "学习人数",
        content: `本课程共有:${number}人上课`
      });
      const interal = setInterval(() => {
        secondsToGo -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(interal);
        modal.destroy();
      }, secondsToGo * 1000);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    getInfo(){
      axios({
        url:url.coursesInfo,
        method:'post',
        data:{

        }
        
      })
    }
  } 
};
</script>

<style scoped>
@import url("../../assets/user-style/CourseInfo.css");
</style>