<template>
  <div class="Login">
    <div class="L-logo">
      
<img src="../assets/image/图钉文字.png" style="margin-top:-25px;margin-left:20px;" alt />
      <!-- <img src="../assets/image/图钉.png" alt style="width:120px;height:120px;"  /> -->
    </div>
    <div class="L-form" >
       <a-button class="Mbtn" type="dashed">管理登录</a-button>
        <P>用户登录</P>
        
     <a-form :form="form" :layout="formLayout" @submit="handleSubmit" class="Form">
         <a-form-item
         label='账户'
         :label-col='formItemLayout.labelCol'
         :wrapper-col='formItemLayout.wrapperCol'
        
         >
         <a-input 
         v-model='userName'
         ></a-input>

         </a-form-item>
          <a-form-item
         label='密码'
         :label-col='formItemLayout.labelCol'
         :wrapper-col='formItemLayout.wrapperCol'
         >
         <a-input
          v-model="password"
        type="password"

         ></a-input>

         </a-form-item>

        
<a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="userlogin">
          登录
        </a-button>
      
      </a-form-item>
        <P class="tips">没有账号？<a @click="Registerpage">注册</a></P>
     </a-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '../serviceAPI.config.js'
export default {
  name: "",
  props: "",
  components: {},
  data() {
    return {
      userName:'',
      password:'',
         formLayout: 'horizontal',
    }
     
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
  created(){
    
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
    Registerpage(){
      this.$router.push({path:'/register'})
  },
  userlogin(){
   axios({
     url:url.login,
     method:'post',
     data:{
      userName:this.userName,
      password:this.password
    }
   }) 
   .then(response=>{
   console.log(response)
   if (response.data.code==200 && response.data.message){
     this.$store.commit("saveUser", this.userName);
      this.$message.success('登录成功');
      this.$router.push('/Home');

   }else{
     this.$message.error('登录失败，请核对账户名称或密码！')
   }
   })
   
 .catch((error)=>{
     console.log(error)
     this.$message.error('登录失败')

   })
  
  },
  },
  
}
</script>

<style>
@import url("../assets/user-style/login.css");
</style>