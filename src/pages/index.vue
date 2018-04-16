<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for = "item in product.list">
              <a v-bind:href="item.url" v-bind:class = "{hot:item.hot}">{{item.name}}<span v-if = "item.hot" class="hot">Hot</span></a>
              <!-- <a v-bind:href="item.url">{{item.name}}</a> -->
            </li>
          </ul>
        </template>
        
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <template>
          <ul class="noborder">
            <li v-for = "item in newsList">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
        </template>
      </div>


    </div>

    <div class="index-right">
      <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for = "item in swiperdata"><img :src = "item.img" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div> -->
      <slidershow :slides = "slider"></slidershow>
      <div class="index-board-list">
          <div class="index-board-item" v-for = "(item,index) in boardList" :class="['index-board-'+index,{'line-last':index%2 != 0}]">
          <span></span>
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail'}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="clear"></div>
   
    
  </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import slidershow from '../pages/slideshow'
export default {
  name: 'layout',
  components: {
    slidershow
  },
  // created () {
  //   this.$http.get("getList").then(function(data){
  //     console.log("ok")
  //   },function(err){
  //     console.log(err)
  //   })
  // },
  created(){
    this.$http.get('api/posts').then((res)=>{
      this.newsList = res.data
    },(err)=>{
      console.log(err)
    })
  },
  // created(){
  //   this.$http.get('getList').then(function(data){
  //     console.log("dd");
  //   },function(err){
  //     console.log(err)
  //   })
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      productList:{
        game:{
          title:'pc产品',
          list:[
            {name:'数据统计',url:'http://www.baidu.com'},
            {name:'数据预测',url:'http://www.baidu.com',hot:true},
            {name:'数据分析',url:'http://www.baidu.com'},
            {name:'广告发布',url:'http://www.baidu.com'},
          ]
        },
        app:{
          title:'应用产品',
          list:[
            {name:'美团',url:'http://www.baidu.com'},
            {name:'糯米',url:'http://www.baidu.com'},
            {name:'饿了么',url:'http://www.baidu.com'},
            {name:'大众点评',url:'http://www.baidu.com'},
          ]
        }
      },
      newsList:[
      ],
      
      // swiperdata:[
      //   {link:'',img:require('../assets/1.jpg')},
      //   {link:'',img:require('../assets/2.jpg')},
      //   {link:'',img:require('../assets/3.jpg')},
      //   {link:'',img:require('../assets/4.jpg')},
      //   {link:'',img:require('../assets/5.jpg')},
      // ],
      slides:[
        {src:require('../assets/1.jpg'),title:'xxx1',href:'detail/analysis'},
        {src:require('../assets/2.jpg'),title:'xxx2',href:'detail/account'},
        {src:require('../assets/3.jpg'),title:'xxx3',href:'detail/forecast'},
        {src:require('../assets/4.jpg'),title:'xxx4',href:'detail/'}
      ],

      boardList:[
        {title:'开放产品',description:'开放产品是一款开放产品',saleout:false},
        {title:'品牌营销',description:'品牌营销帮助你的产品更好地找到定位',saleout:false},
        {title:'开放产品',description:'开放产品是一款开放产品',saleout:false},
        {title:'开放产品',description:'开放产品是一款开放产品',saleout:false},
      ]
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      pagination : '.swiper-pagination', 
      paginationClickable :true, 
      observer: true,
      loop:true,
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next',
    })
  }
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

