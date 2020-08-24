<template>
  <div class="PI-container">
     <a-form :form="form" :layout="formLayout" @submit="handleSubmit" class="Form">

      <!--        
      <span>
        输入密码：
        <input type="text" />
      </span>
      <span>
        确认密码：
        <input type="text" />
      </span>
      <span>
        <a-button>保存</a-button>
      </span>    
      -->
        <a-form-item
         label='密码'
         :label-col='formItemLayout.labelCol'
         :wrapper-col='formItemLayout.wrapperCol'
         >
         <a-input
          
        type="password"
        v-model='password'
         ></a-input> {{password}}

         </a-form-item>

         <!-- <a-form-item 
         :label-col='formItemLayout.labelCol'
         :wrapper-col='formItemLayout.wrapperCol'
         label="确认密码">
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请输入您的密码!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
         </a-form-item> -->
       
        <button @click="sendpassword()">
          保存
        </button>
     
    </a-form>
  </div>
</template>
<script>
import url from "../serviceAPI.config";
import axios from "axios";

export default {
  name: "EssentialInfo",
  props: "",
  components: {},
  data() {
    return {
         formLayout: 'horizontal',
         password:'',


       
    };
  },
    mounted(){
   this._id = this.$store.state.userid
   this._id = JSON.parse(localStorage.getItem("userid"))

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
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  
  methods:{
       handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
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
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('密码不一致，请您仔细确认一下！');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    sendpassword(){
      axios({
        url:url.passwordinfo,
        method:'post',
        data:{
          _id:this._id,
          password:this.password
        }
      }).then(response=>{
      console.log(response);
      if(response.status ==200){
        this.$message.success('密码修改成功！')
      }

      })
    }
  },

};
</script>

<style scoped>
@import url("../assets/user-style/PasswordInfo.css");
</style>