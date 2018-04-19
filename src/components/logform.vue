<template>
  <div class="login-form form">
    <p><span>用户名：</span><input type="text" v-model = "usernamemodel" placeholder="please input your name"></p>
    <span class="error">{{userErrors.errorText}}</span>
    <p><span>密码：</span> <input type="password" v-model = "passwordmodel" placeholder="please input your password"></p>
    <span class="error">{{passErrors.errorText}}</span>
    <a href="javascript:;" class="button" @click = "onLogin">登录</a>
    <p>{{errorsText}}</p>
  </div>
</template>

<script>
export default {
  name:"login-form",
  data(){
    return{
      usernamemodel:'',
      passwordmodel:'',
      errorsText:''
    }
  },
  computed: {
    userErrors(){
      let status,errorText
      if(/@/g.test(this.usernamemodel)){
        status = true;
        errorText = "it's right"
      }
      else{
        status = false;
        errorText = "it not has @"
      }
      if(!this.userFlag){
        this.userFlag = true;
        errorText = ''
      }
      return {
        status,errorText
      }
    },
    passErrors(){
      let status,errorText
      if(/^\w{1,6}$/.test(this.passwordmodel)){
        status = true,
        errorText = ''
      }
      else{
        status = false;
        errorText = '密码少于超过六个字符'
      }
      if(!this.passwordFlag){
        this.passwordFlag = true;
        errorText = ''
      }
      return {
        status,errorText
      }
    }
  },
  methods:{
    onLogin(){
      if(!this.userErrors.status || !this.passErrors.status){
        this.errorsText = "it failed"
        
      }
      else{
        console.log(this.usernamemodel+":"+this.passwordmodel);
        this.errorsText = ''
        this.$http.get("api/login").then((res)=>{
          this.$emit('haslog',res.data)
        },(error)=>{
          console.log(error)
        })
        
      }
      
    }
  }
 
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

