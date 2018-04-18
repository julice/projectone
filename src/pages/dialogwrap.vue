<template>
  <div class="dialog-wrap" v-if = "isshow">
    <div class="dialog-cover" @click="closeDialog"></div>
    <div class="dialog-content">
      <p class="dialog-close" @click="closeDialog">X</p>
      <slot>empty</slot>
    </div>
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
.dialog-wrap{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 2}
.dialog-cover{width: 100%;height: 100%;position: absolute;left: 0;top: 0;background: rgba(0,0,0,0.5);cursor: pointer;}
.dialog-content{width: 50%;max-height: 50%;position: absolute;left: 50%;margin-left: -25%;top: 50%;margin-top: -25%;background: #fff;border: 2px solid #000;border-radius: 10px;padding: 2%;}
.dialog-close{position: absolute;right: 10px;top: 10px;font-size: 20px;color: #000;font-family: "微软雅黑";cursor: pointer;}
</style>

