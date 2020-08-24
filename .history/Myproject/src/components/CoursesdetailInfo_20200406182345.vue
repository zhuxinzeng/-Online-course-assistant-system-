<template>
  <div>
    <a-card hoverable style="width: 90%;height：160px;margin-top:15px;margin-left:35px;">
      <img alt="example" :src='img' slot="cover" style="width:284px;height:185px; border-bottom:1px solid grey" />
      <template class="ant-card-actions" slot="actions">
          {{coursename}}
          <a-tooltip >
          {{ number }}人正在学习
          </a-tooltip>
      </template>
      <a-card-meta
        :title="name"
        :description="college"
        style="width: 258px;height：160px;margin-left:10px;"
      >
        <a-avatar slot="avatar" :src='avator' />
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ["name", "college",'number','coursename','room','img','avator'],
  data() {
    return {
      current: 2,
      Number: 12,
      visible: false,
      placement: "right",
      courseId: "",
      coursesInfo: {}
    };
  },
 
};
</script>