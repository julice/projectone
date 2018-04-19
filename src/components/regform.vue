<template>
  <div class="regist-form form">
    <p><span>用户名：</span><input type="text" v-model = "usernamemodel" placeholder="please input your name"></p>
    <span class="error">{{userError.errorText}}</span>
    <p><span>密码：</span> <input type="password" v-model = "passwordmodel" placeholder="please input your password"></p>
    <span class="error">{{passwordError.errorText}}</span>
    <p><span>again：</span> <input type="password" v-model = "passwordmodel2" placeholder="please input your password again"></p>
    <span class="error">{{passwordError2.errorText}}</span>
    <a href="javascript:;" class="button" @click = "onRegin">注册</a>
  </div>
</template>

<script>
export default {
  name:"regist-form",
  data(){
    return{
      usernamemodel:'',
      passwordmodel:'',
      passwordmodel2:'',
      errorsText:''
    }
  },
  computed:{
    userError(){
      let status,errorText
      if(/@/g.test(this.usernamemodel)){
        status = true;
        errorText = ''
      }
      else{
        status = false;
        errorText = '请输入具有@的用户名'
      }
      return{
        status,errorText
      }
    },
    passwordError(){
      let status,errorText
      if(/^\w{1,6}$/g.test(this.passwordmodel)){
        
        status = true;
        errorText = ''
      }
      else{
        status =false;
        errorText = '请输入1-6位的密码'
      }
      return{
        status,errorText
      }
    },
    passwordError2(){
      let status,errorText
      if(this.passwordmodel === this.passwordmodel2){
        status = true;
        errorText = ''
      }
      else{
        status =false;
        errorText = '您输入的密码不正确'
      }
      return{
        status,errorText
      }
    }
  },
  methods:{
    onRegin(){
      if(!this.userError.status || !this.passwordError.status || !this.passwordError2.status){
        this.errorsText = 'you can not regist'
        alert(this.errorsText)
      }
      else{
        this.$emit('hasreg',this.usernamemodel)
        console.log(this.usernamemodel)
      }
    }
  }
 
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

