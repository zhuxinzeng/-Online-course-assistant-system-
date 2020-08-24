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
      
    </form>-->
    <a-form :form="form" @submit="handleSubmit" class="CI-form">
      <div class="info">
        <a-form-item v-bind="formItemLayout" label="邮箱">
          <a-input v-model="email" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="电话号码">
          <a-input v-model="tel" style="width: 200px">
            <a-select
              slot="addonBefore"
              v-decorator="['prefix', { initialValue: '86' }]"
              style="width: 70px"
            >
              <a-select-option value="86">+86</a-select-option>
              <a-select-option value="87">+87</a-select-option>
            </a-select>
          </a-input>
        </a-form-item>

        <a-button @click="sendcontactinfo()">保存</a-button>
      </div>
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
      formLayout: "horizontal",
      tel:'',
      email:'',
      _id:''
    };
  },
  mounted() {
    this._id = this.$store.state.userid;
    this._id = sessionStorage.getItem("userid");
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 10, offset: 4 }
          }
        : {};
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
   
    sendcontactinfo(){
         axios({
        url:url.contactinfo,
        method:'post',
        data:{
          _id:this._id,
          email:this.email,
          tel:this.tel
        }
      }).then(response=>{
      console.log(response);
      if(response.status ==200){
        this.$store.commit('saveUsere',this.email)
         this.$store.commit('saveUsertel',this.tel)
        this.$message.success('修改成功！')
      }else{
        this.$message.error("服务器错误，数据获取失败！ ");
      }

      })
    }
  }
};
</script>

<style scoped>
@import url("../assets/user-style/ContactInfo.css");
</style>