<template>
  <div class="slideshow" @mouseover="clearInv" @mouseout="runInv">
    <div class="slideimg">
      <a :href=slides[nowIndex].href>
        <transition name="slide-trans">
          <img v-if="isshow" :src="slides[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isshow" :src="slides[nowIndex].src" alt="">
        </transition>
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <a href="javascript:;" class="slideprev" @click = "goto(prevIndex)">&lt;</a>
    <a href="javascript:;" class="slidenext" @click = "goto(nextIndex)">&gt;</a>
    <ul class="slidepages">
      <li>
        <a href="javascript:;" v-for = "(item,index) in slides" @click="goto(index)" :class = "{on:index === nowIndex}">{{index+1}}</a>
      </li>
    </ul>
   
    
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props: ['slides',"initime"],
  data () {
    return {
      nowIndex:0,
      isshow:true
      // inv:2000
    }
  },
  computed: {
    prevIndex(){
      if(this.nowIndex === 0){
        return this.slides.length - 1
      }
      else{
        return this.nowIndex - 1
      }
    },
    nextIndex(){
      if(this.nowIndex === this.slides.length-1){
        return 0;
      }
      else{
        return this.nowIndex+1
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
    runInv(){
      this.invid = setInterval(()=>{
        this.goto(this.nextIndex)
        console.log("dd")
      },this.initime)
    },
    clearInv(){
      clearInterval(this.invid)
    }
    
  },
  mounted () {
    this.runInv()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active{transition: all .5s}
.slide-trans-enter{transform: translateX(900px)}
.slide-trans-old-leave-active{transition: all .5s;transform: translateX(-900px)}
.slideshow{position: relative;margin: 15px 15px 15px 0;width: 900px;height: 350px;overflow: hidden;}
.slideshow h2{position: absolute;width: 100%;height: 100%;color: #fff;background: #000;opacity: .5;bottom: 0;height:30px;text-align: left;padding-left: 15px;}
.slideimg{width: 100%;}
.slideimg img{width: 100%;position: absolute;top: 0;}
.slidepages{position: absolute;bottom: 10px;right: 15px}
.slideprev{font-size: 40px;font-weight: bold;color: #fff;line-height: 60px;position: absolute;left: 0;top: 175px;font-family: '宋体'}
.slidenext{font-size: 40px;font-weight: bold;color: #fff;line-height: 60px;position: absolute;right: 0;top: 175px;font-family: '宋体'}
.slidepages a{width: 30px;height: 20px;display: inline-block;color: #fff;font-size: 18px;line-height: 20px;opacity: .5}
.slidepages a.on{opacity: 1}
</style>

