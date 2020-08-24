<template>
  <div>
    <a-card hoverable style="width: 85%;height：160px;margin-top:15px;margin-left:40px;">
      <img alt="example" :src='img' slot="cover" style="width:268px;height:195px; border-bottom:1px solid grey" />
      <template class="ant-card-actions" slot="actions">
          {{coursename}}
          <a-tooltip >
          {{ number }}人正在学习
          </a-tooltip>
      </template>
      <a-card-meta
        :title="name"
        :description="college"
        style="width: 258px;margin-left:10px;"
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