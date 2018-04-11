<template>
  <div class="layout">
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>|
            <li>注册</li>|
            <li>关于</li>
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
   
    
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.app-head .head-nav li{display: inline-block;margin: 0 10px;font-size: 16px;line-height: 50px;}
.app-footer{width: 100%;height: 50px;background: rgba(0,0,0,0.5);color: #fff;text-align: center;}
.app-footer p{padding-top: 14px;}
</style>
