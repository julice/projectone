<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <img :src = "imgicon"  class="imgMap">
      <ul>
        <router-link v-for = "item in products" :to = "{path : item.path}" :class="{active:item.active}" @click="!item.active">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="clear"></div>
  </div>
  
</template>

<script>
export default {
  name:"detail",
  data(){
    return{
      products:[
        {name:'数据统计',path:'count',active:true},
        {name:'数据预测',path:'forecast',active:false},
        {name:'数据分析',path:'analysis',active:false},
        {name:'数据发布',path:'publish',active:false},
      ],
      imgMap:{
        '/detail/count':require('../assets/icon/1.jpg'),
        '/detail/forecast':require('../assets/icon/2.jpg'),
        '/detail/analysis':require('../assets/icon/3.jpg'),
        '/detail/publish':require('../assets/icon/4.jpg'),
      }
    }
  },
  computed: {
    imgicon(){
      return this.imgMap[this.$route.path]
    }
  }
 
 
  
}
</script>

<style>
.detail-wrap{width: 1200px;margin: 0 auto;overflow: hidden}
.detail-left{width: 200px;float: left;padding: 20px 0 30px 0;background: #fff;}
.detail-right{width: 940px;float: left;margin-left: 20px;background: #fff;padding: 30px 20px;}
.detail-right .detail-intro{margin-bottom: 30px;}
.detail-right .detail-intro h3{font-size: 20px;font-weight: bold;margin-bottom: 10px;}
.detail-right .detail-intro p{font-size: 16px;line-height: 32px;margin-bottom: 10px;}
.detail-left a{display: block;font-size: 16px;color: #000;padding: 10px 0 10px 20px;}
.detail-left a.router-link-active,.detail-left a:hover{background: #0ff;color: #fff;}
.detail-left .imgMap{display: block;margin: 0 auto;}
</style>

