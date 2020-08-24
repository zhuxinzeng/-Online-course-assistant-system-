<template>
    <div>
       <a-card hoverable style="width: 100%;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src=""
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
                    src=""
                  />
                </a-card-meta>
              </a-card>
    </div>
</template>
<script> 
export default {
    props:[''],
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

      courseId:'',
      coursesInfo:{},
    };
  },
}
</script>