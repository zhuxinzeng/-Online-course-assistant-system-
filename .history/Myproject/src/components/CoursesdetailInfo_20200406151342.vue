<template>
  <div>
    <a-card hoverable style="width: 100px;height：160px;margin-top:18px;">
      <img alt="example" :src='img' slot="cover" style="width:322px;height:265px;" />
      <template class="ant-card-actions" slot="actions">
          {{coursename}}
          <a-tooltip>
          {{ number }}人正在学习
          </a-tooltip>
      </template>
      <a-card-meta
        :title="name"
        :description="college"
        style="width: 300px;height：160px;margin-left:10px;margin-top:18px;"
      >
        <a-avatar slot="avatar" src />
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