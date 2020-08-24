<template>
  <div class="OA-container">
    <div class="content">
      <!-- <h1>{{ msg }}</h1> -->

      <p class="user_number">
        当前在线人数：
        <span>{{userNmber}}</span>
      </p>

      <ul>
        <!-- 最新加入 -->
        <li v-if="newUser">有新人加入</li>
        <li v-for="(item,index) in speak" :key="index" :class="{active:item.name == userStorage}">
          <span>
            <font v-if="item.name== userStorage">:</font>
            {{item.name}}
            <font v-if="item.name!= userStorage">:</font>
          </span>
          {{item.msg}}
        </li>
      </ul>
    </div>
    <div class="btninput">
      <a-row>
        <a-col :span="20">
          <div class="grid-content bg-purple input">
            <a-input
              v-model="inValue"
              size="small"
              placeholder="请输入内容"
              @keyup.enter.native="btn_sbmit"
            ></a-input>
          </div>
        </a-col>

        <a-col :span="4">
          <div class="grid-content bg-purple-light">
            <a-button type="primary" size="small" @click="btn_sbmit">发送</a-button>
          </div>
        </a-col>

        <!-- <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col> -->
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      speak: [], //聊天记录
      inValue: "", //当前输入信息
      userName: "",
      userStorage: JSON.parse(localStorage.getItem("userName")),
      newUser: false, //是否有新人加入
      userNmber: 0 //在线人数
    };
  },
  created() {
    fetch("http://localhost:3000/socket/b")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
      });
  },
  mounted() {
    if (this.$store.state.userName) {
      this.userName = this.$store.state.userName;
    } else {
      this.userName = JSON.parse(localStorage.getItem("userName"));
    }

    // this.userIp=JSON.parse(localStorage.getItem("userInfo"))
    this.$socket.emit("connect", 1);
  },
  methods: {
    //提交向后端发送数据
    btn_sbmit() {
      //   this.userIp = this.formatDateTime() + Math.random().toString(36).substr(2);
      this.speak.push({ name: this.userName, msg: this.inValue });
      this.$socket.emit("send", {
        name: "" + this.userName,
        getMsg: this.inValue
      });

      this.inValue = "";
    }
    //生成id
    //   formatDateTime() {
    //     var date = new Date();
    //     var y = date.getFullYear();
    //     var m = date.getMonth() + 1;
    //     m = m < 10 ? ('0' + m) : m;
    //     var d = date.getDate();
    //     d = d < 10 ? ('0' + d) : d;
    //     var h = date.getHours();
    //     var minute = date.getMinutes();
    //     var second = date.getSeconds();
    //     return y + m + d + h + minute + second;
    //   }
  },
  sockets: {
    connect(data) {
      if (data) {
        console.log("连接成功", data);
        this.$socket.emit("users");
      }
    },
    users(data) {
      console.log("在线人数", data);
      this.userNmber = data;
    },
    reconnect(data) {
      console.log("重新连接", data);
    },
    disconnecting(data) {
      console.log("socket已断开连接");
      this.$socket.emit("users");
    },
    //有新人加入
    // userinfoNumber(data){
    //   this.userNmber = true;
    // },
    getMsg(data) {
      console.log("后端传过来的消息", data);
      this.speak = data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.OA-container {
  margin: 0px auto;
}
.OA-container .content {
  width: 500px;
  height: 80%;
  max-height: 600px;
  border: 2px solid #95a5a6;
  border-bottom: 0;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0px;
  overflow-y: auto;
  box-shadow: 1px -2px 8px;
  border-top-left-radius: 1%;
  border-top-right-radius: 1%;
  .user_number {
    font-size: 14px;

    span {
      color: #ed5bb5;
    }
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;

  padding: 0;
}

li {
  margin: 10px;
  text-align: left;

  span {
    color: #89c4f4;
    display: inline-block;
    width: 50px;
    text-align: left;

    // text-align-last: left;
  }

  &.active {
    text-align: right;

    span {
      color: #42b983;
      float: right;
      text-align: right;
    }
  }
}

a {
  color: #42b983;
}
.btninput {
  width: 500px;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  border: 2px solid #95a5a6;
  border-top: 0;
  box-shadow: 1px 1px 10px #EEEEEE;
}
.btninput .input {
  width: 400px;
}
</style>