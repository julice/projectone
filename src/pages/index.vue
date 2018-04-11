<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <h3>pc产品</h3>
        <ul>
          <li v-for = "item in productList">
            <a v-bind:href="item.url">{{item.name}}</a>
            <!-- <a v-bind:href="item.url">{{item.name}}</a> -->
          </li>
        </ul>
        <h3>应用表</h3>
        <!-- <ul>
          <li v-for = "item in productList.app">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul> -->
      </div>
    </div>

    <div class="index-right">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>

    <div class="clear"></div>
   
    
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      productList:[
        {url:'http://www.baicu.com',name:'产品分析'},
        {url:'http://www.baicu.com',name:'广告分析'},
        {url:'http://www.baicu.com',name:'数据分析'},
        {url:'http://www.baicu.com',name:'流量分析'},
      ]
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrap{width: 1200px;margin: 10px auto 50px;}
.index-left{width: 280px;float: left;background: #fff;}
.index-left-block{width: 100%;}
.index-left-block h2{font-size: 24px;font-weight: normal;line-height: 36px;color: #fff;background: #4fbe8d;padding: 10px 0;padding-left: 20px}
.index-left-block h3{font-size: 20px;font-weight: normal;line-height: 36px;padding: 5px 0 5px 20px}
.index-left-block ul{padding-left: 30px;padding-bottom: 10px;border-bottom: 1px solid #eee;}
.index-left-block ul li{line-height: 30px;font-size: 16px;}
.index-left-block ul li a{color: #000}


.swiper-container {
  width: 600px;
  height: 300px;
}

</style>

