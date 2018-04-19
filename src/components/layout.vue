<template>
  <div class="layout">
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <p>
            <router-link to="/" class="back">首页</router-link>
          </p>
          <ul class="nav-list">
            <li>{{username}}</li>
            <div v-if = "username === ''">
              <li @click = "logdialog">登录</li>|
              <li @click = "regdialog">注册</li>|
            </div>
            <div v-else>
               <li @click = "quit">退出</li>
            </div>
            <li @click = "opendialog">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <!-- <p>
        <router-link to = "/">首页</router-link>
      </p> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>www.baidu.com</p>
    </div>

    <dialogwrap :isshow = "isshowdialog" @onclick="closedialog('isshowdialog')">
      <p>广州长隆水上乐园占地面积450亩，是由知名公司加拿大白水公司（WHITE WATER）以及知名主题乐园设计机构加拿大科力（FORREC）公司联合设计的水上乐园。国际主题景点的业内权威组织TEA (Themed Entertainment Association)及顾问集团AECOM Economics在2013年公布的“全球最佳20个水上乐园”排行榜上，广州长隆水上乐园荣登榜首。2013年至2017年，长隆水上乐园连续5年蝉联了这个荣誉，捍卫了水上乐园领先国际的“行业领头羊”地位。</p>
    </dialogwrap>
    <dialogwrap :isshow = "islogdialog" @onclick="closedialog('islogdialog')">
      <p>登录</p>
      <logform @haslog = "onsuccess"></logform>
    </dialogwrap>
    <dialogwrap :isshow = "isregdialog" @onclick="closedialog('isregdialog')">
      <p>注册</p>
      <regform @hasreg = "onregsuccess"></regform>
    </dialogwrap>
   
    
  </div>
</template>

<script>
import dialogwrap from '../components/dialogwrap'
import logform from '../components/logform'
import regform from '../components/regform'


export default {
  name: 'layout',
  components:{
    dialogwrap,logform,regform
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isshowdialog:false,
      islogdialog:false,
      isregdialog:false,
      username:''
    }
  },
  methods:{
    opendialog(){
      this.isshowdialog = true
    },
    regdialog(){
      this.isregdialog = true
    },
    logdialog(){
      this.islogdialog = true
    },
    closedialog(attr){
      this[attr] = false
    },
    quit(){
      this.username = ''
    },
    onsuccess(data){
      this.username = data.name;
      this.closedialog('islogdialog')
      console.log(this.username)
    },
    onregsuccess(data){
      // this.username = data.name;
      this.closedialog('isregdialog')
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*reset*/
body,html,div,p,table,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6{margin:0px;padding:0px;}
ul,ol,li,dl,dt,dd{list-style:none;}
img,a{border:none;}
em,i{font-style:normal;}
a{outline:none;text-decoration:none;}


/*base*/
body{font-family:'微软雅黑','宋体',Verdana,sans-serif;color:#444444;font-size:14px;background:#eff1f3;width:100%;height:100%;position:relative;}
.wrap{position:relative;margin:0px auto;width:1200px;padding:0px;}
.wrap1920{margin:0px auto;width:100%;max-width:1920px;min-width:1200px;}
.clear{width:0;height:0;font-size:0;line-height:0;clear:both;overflow:hidden;}


@font-face {
  font-family: 'iconfont';  /* project id 400632 */
  src: url('//at.alicdn.com/t/font_400632_5yq1e7rdjz0hehfr.eot');
  src: url('//at.alicdn.com/t/font_400632_5yq1e7rdjz0hehfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_400632_5yq1e7rdjz0hehfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_400632_5yq1e7rdjz0hehfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_400632_5yq1e7rdjz0hehfr.svg#iconfont') format('svg');
}


.app-head{width: 100%;height: 75px;background: #000;color: #fff}
.app-head-inner{width: 1280px;margin: 0 auto;}
.app-head .head-nav{width: 310px;float: right;margin-right: 50px;margin-top: 12px;}
.app-head .head-nav li{display: inline-block;margin: 0 10px;font-size: 16px;line-height: 50px;cursor: pointer;}
.app-head .head-nav div{display: inline-block;}
.app-content{min-height: 800px;}
.app-footer{width: 100%;height: 50px;background: rgba(0,0,0,0.5);color: #fff;text-align: center;}
.app-footer p{padding-top: 14px;}

.form p{margin-bottom: 30px;display: inline-block}
.form p span{width: 80px;display: inline-block;}
.form span.error{display: inline-block;color: #f00}
.form p input{width: 300px;font-size: 16px;padding: 5px 10px;}
.button{width: 60px;height: 30px;display: block;border-radius: 5px;margin-left: 80px;background:#5cb88f;color: #fff;line-height: 30px;text-align: center;}
.back{position: absolute;left: 50px;top: 15px;color: #fff;padding: 10px 30px;}
</style>
