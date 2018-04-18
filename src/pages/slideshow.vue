<template>
  <div class="slideshow" @mouseover="clearIniv" @mouseout="runIniv">
    <div class="slideImg">
        <a :href="slides[nowIndex].href">
          <transition name="slide-trans">
            <img :src="slides[nowIndex].src" alt="" v-if="isshow">
          </transition>
          <transition name="slide-trans-old">
            <img :src="slides[nowIndex].src" alt="" v-if="!isshow">
          </transition>
        </a>
    </div>
    <div class="slideBtn">
      <a href="javascript:;" class="slidePrev" @click="goto(prevIndex)">&lt;</a>
      <a href="javascript:;" class="slideNext" @click="goto(nextIndex)">&gt;</a>
    </div>
    <div class="slidetext">
      <h2>{{slides[nowIndex].title}}</h2>
    </div>
    <div class="iconBtn">
      <a href="javascript:;" v-for="(item,index) in slides" :class="{on:index ==nowIndex}" @click="goto(index)">{{index}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props:['slides','initime'],
  data(){
    return{
      nowIndex : 0,
      isshow:true
    }
  },
  computed: {
    prevIndex(){
      if(this.nowIndex===0){
        return this.slides.length - 1
      }
      else{
        return this.nowIndex - 1;
      }
    },
    nextIndex(){
      if(this.nowIndex === this.slides.length - 1){
        return 0
      }
      else{
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto(index){
      this.isshow = false;
      setTimeout(()=>{
        this.isshow = true;
        this.nowIndex = index;
      },10)
    },
    runIniv(){
      this.iniv = setInterval(()=>{
        this.goto(this.nextIndex)
      },this.initime)
    },
    clearIniv(){
      clearInterval(this.iniv)
    }
  },
  mounted () {
    // this.runIniv();
  }
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active{transition: all .5s}
.slide-trans-enter{transform: translateX(900px)}
.slide-trans-old-leave-active{transition: all .5s;transform: translateX(-900px)}
.slideshow{width: 900px;height: 300px;position: relative;border: 1px solid #000;overflow: hidden;}
.slideImg img{width: 100%;height: 300px;position: absolute;left: 0;top: 0;}
a.slidePrev{width: 60px;height: 30px;font-size: 36px;color: #fff;font-weight: bold;font-family: "宋体";text-align: center;line-height: 30px;position: absolute;left: 0;top: 150px;}
a.slideNext{width: 60px;height: 30px;font-size: 36px;color: #fff;font-weight: bold;font-family: "宋体";text-align: center;line-height: 30px;position: absolute;right: 0;top: 150px;}
.slidetext{width: 100%;background: rgba(0,0,0,0.5);position: absolute;left: 0;bottom: 0;}
.slidetext h2{padding-left: 20px;font-size: 16px;line-height: 32px;color: #fff;}
.iconBtn{position: absolute;right: 15px;bottom: 0;}
.iconBtn a{width: 30px;height: 32px;display: inline-block;line-height: 32px;color: #fff;text-align: center;opacity: .5}
.iconBtn a.on{opacity: 1;}
</style>

