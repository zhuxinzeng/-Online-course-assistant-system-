<template>
  <div @click="goCourseDetails()">
    <a-card hoverable style="width: 85%;height：225px;margin-top:15px;margin-left:40px;">
      <img alt="example" :src='img' slot="cover" style="width:265px;height:215px; " />
      <template class="ant-card-actions" slot="actions">
          {{coursename}}
          <a-tooltip >
          {{ number }}人正在学习
          </a-tooltip>
      </template>
      <a-card-meta
        :title="name"
        :description="college"
        style="width: 250px;margin-left:10px;height:9px;"
      >
        <a-avatar slot="avatar" :src='avator' />
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ["name", "college",'number','coursename','room','img','avator','_id'],
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
  methods:{
    goCourseDetails(){
      console.log(this._id)
      this.$router.push({name:'CourseDetails',query:{_id:this._id}})
      }
 
  },
}
</script>