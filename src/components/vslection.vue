<template>
  <div class="vselection">
    <select name="productlist" id="">
      <option v-for = "item in vselect" value="item.value">{{item.label}}</option>
    </select>
  </div>
</template>

<script>

export default {
  name:"vselection",
  props: ['vselect']
  
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vselection{display: inline-block;margin-left: 10px;}
select{height: 30px;padding: 0 10px;font-size: 16px;line-height: 28px;}
</style>

