<template>
  <div>
    <a-card hoverable style="width: 100%;height：160px;margin-top:18px;">
      <img alt="example" src slot="cover" style="width:298px;height:165px;" />
      <template class="ant-card-actions" slot="actions">
        <a-icon type="team"  @click="countDown()" />
        <a-icon type="eye" />
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
  props: ["name", "college"],
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
      classroom: "3-201",

      courseId: "",
      coursesInfo: {}
    };
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
  }
};
</script>