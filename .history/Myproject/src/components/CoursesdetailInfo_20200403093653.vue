<template>
    <div>
       <a-card hoverable style="width: 300px;height：160px;margin-left:10px;margin-top:18px;">
                <img
                  alt="example"
                  src="."
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
    
}
</script>