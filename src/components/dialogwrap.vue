<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" @click="closeDialog" v-if = "isshow"></div>
    <transition name="drop">
      <div class="dialog-content" v-if = "isshow">
        <p class="dialog-close" @click="closeDialog">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:"dialog-wrap",
  props:{
    isshow:{
      typeof:Boolean,
      default:false
    }
  },
  data(){
    return{
    }
  },
  methods: {
    closeDialog(){
      this.$emit("onclick")
    }
  }
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drop-enter-active{transition: all .5s}
.drop-enter{transform: translateY(-500px)}
.drop-leave-active{transition: all .3s;transform: translateY(-500px)}
/* .dialog-wrap{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 2} */
.dialog-cover{width: 100%;height: 100%;position: fixed;left: 0;top: 0;background: rgba(0,0,0,0.5);cursor: pointer;}
.dialog-content{width: 50%;max-height: 50%;position: fixed;left: 50%;margin-left: -25%;top: 50%;margin-top: -25%;background: #fff;border: 2px solid #000;border-radius: 10px;padding: 2%;}
.dialog-close{position: absolute;right: 10px;top: 10px;font-size: 20px;color: #000;font-family: "微软雅黑";cursor: pointer;}
</style>

