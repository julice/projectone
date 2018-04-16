<template>
  <div class="slideshow">
    
    <p>ddd</p>
   
    
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'slideshow',
  data () {
    return {
     
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrap{width: 1200px;margin: 10px auto 0;}
.index-left{width: 280px;float: left;background: #fff;padding-bottom: 200px;}
.index-left-block{width: 100%;}
.index-left-block h2{font-size: 24px;font-weight: normal;line-height: 36px;color: #fff;background: #4fbe8d;padding: 10px 0;padding-left: 20px}
.index-left-block h3{font-size: 20px;font-weight: normal;line-height: 36px;padding: 5px 0 5px 20px}
.index-left-block ul{padding-left: 30px;padding-bottom: 10px;border-bottom: 1px solid #eee;}
.index-left-block ul.noborder{border-bottom: 0;}
.index-left-block ul li{line-height: 30px;font-size: 16px;}
.index-left-block ul li a{color: #000}
.index-left-block ul li a span.hot{color:#fff;background: #f00;display: inline-block;margin-left: 10px}

.index-right{float: left;margin-left: 20px;width: 900px;}

.swiper-container {width: 900px;height: 400px;margin-left: 0;}
.swiper-container .swiper-slide img{width: 900px;height: 400px;display: block;}

.index-board-list{margin-top: 10px;width: 900px;}
.index-board-item{width: 420px;display: inline-block;padding:20px 0 20px 20px;background: #fff;margin-bottom: 20px;margin-right: 20px;}
.line-last{margin-right: 0;}
.index-board-item span{width: 100px;height: 100px;float: left;}
.index-board-item-inner{padding-left: 120px;}
.index-board-item h2{font-size: 20px;font-weight: bold;line-height: 36px;}
.button{width: 100px;height: 30px;display: block;background: #4fbe8d;color: #fff;font-size: 16px;text-align: center;line-height: 30px;margin-top: 10px;}
.index-board-0 span{background: url(../assets/icon/1.jpg) no-repeat center center}
.index-board-1 span{background: url(../assets/icon/2.jpg) no-repeat center center}
.index-board-2 span{background: url(../assets/icon/3.jpg) no-repeat center center}
.index-board-3 span{background: url(../assets/icon/4.jpg) no-repeat center center}

</style>

