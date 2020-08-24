<template>
  <div class="CI-container">
    <!-- <form action class="CI-info">
      <span>
        电话：
        <input type="text" />
      </span>
      <span>
        邮箱：
        <input type="text" />
      </span>
      <span>
        <a-button>保存</a-button>
      </span>
      
    </form> -->
    <a-form :form="form" @submit="handleSubmit" class="CI-form">
      <div class="info">
    <a-form-item v-bind="formItemLayout" label="邮箱">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '请您输入正确的邮箱格式!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
     <a-form-item v-bind="formItemLayout" label="电话号码">
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入您的电话号码!' }],
          },
        ]"
        style="width: 200px"
      >
        <a-select
          slot="addonBefore"
          v-decorator="['prefix', { initialValue: '86' }]"
          style="width: 70px"
        >
          <a-select-option value="86">
            +86
          </a-select-option>
          <a-select-option value="87">
            +87
          </a-select-option>
        </a-select>
      </a-input>
    </a-form-item>
     <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button  html-type="submit">
        保存
      </a-button>
    </a-form-item>
    </div>
    </a-form>
  </div>
</template>
<script>
export default {
  name: "EssentialInfo",
  props: "",
  components: {},
  data() {
    return {
      formLayout: 'horizontal',
     
      
    
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {
        };
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 10, offset: 4 },
          }
        : {};
    },
  },
 beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
   
   
    
  },
};
</script>

<style scoped>
@import url("../assets/user-style/ContactInfo.css");
</style>