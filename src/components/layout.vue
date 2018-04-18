<template>
  <div class="layout">
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul class="nav-list">
            <li @click = "logdialog">登录</li>|
            <li @click = "regdialog">注册</li>|
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
      <logform></logform>
    </dialogwrap>
    <dialogwrap :isshow = "isregdialog" @onclick="closedialog('isregdialog')">
      <p>注册</p>
      <regform></regform>
    </dialogwrap>
   
    
  </div>
</template>

<script>
import dialogwrap from '../pages/dialogwrap'
import logform from '../pages/logform'
export default {
  name: 'layout',
  components:{
    dialogwrap,logform
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isshowdialog:false,
      islogdialog:false,
      isregdialog:false,
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
.app-head .head-nav{width: 200px;float: right;margin-right: 50px;margin-top: 12px;}
.app-head .head-nav li{display: inline-block;margin: 0 10px;font-size: 16px;line-height: 50px;cursor: pointer;}
.app-footer{width: 100%;height: 50px;background: rgba(0,0,0,0.5);color: #fff;text-align: center;}
.app-footer p{padding-top: 14px;}
</style>
