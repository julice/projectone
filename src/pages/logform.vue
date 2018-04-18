<template>
  <div class="login-form">
    <p><span>用户名：</span><input type="text" v-model = "usernamemodel" placeholder="please input your name"></p>
    <p><span>密码：</span> <input type="password" v-model = "passwordmodel" placeholder="please input your password"></p>
    <a href="javascript:;" class="button" @click = "onLogin">登录</a>
  </div>
</template>

<script>
export default {
  name:"login-form",
  data(){
    return{
      usernamemodel:'',
      passwordmodel:''
    }
  },
  methods:{
    onLogin(){
      console.log(this.usernamemodel+":"+this.passwordmodel)
    }
  }
 
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form p{margin-bottom: 30px;}
.login-form p span{width: 80px;display: inline-block;}
.login-form p input{width: 300px;font-size: 16px;padding: 5px 10px;}
.button{width: 60px;height: 30px;display: block;border-radius: 5px;margin-left: 80px;background:      #5cb88f;color: #fff;line-height: 30px;text-align: center;}
</style>

