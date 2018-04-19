<template>
  <div class="detail-analysis">
    <div class="detail-intro">
      <h3>数据分析</h3>
      <p>1. 扎实的 JavaScript / HTML / CSS 基本功。这是前置条件。</p>
      <p>2. 通读官方教程 (guide) 的基础篇。不要用任何构建工具，就只用最简单的把教程里的例子模仿一遍，理解用法。不推荐上来就直接用 vue-cli 构建项目，尤其是如果没有 Node/Webpack 基础。<p>
      <p>3. 照着官网上的示例，自己想一些类似的例子，模仿着实现来练手，加深理解。</p>
      <p>4. 阅读官方教程进阶篇的前半部分，到『自定义指令 (Custom Directive) 』为止。着重理解 Vue 的响应式机制和组件生命周期。『渲染函数（Render Function)』如果理解吃力可以先跳过。</p>
      <p>5. 阅读教程里关于路由和状态管理的章节，然后根据需要学习 vue-router 和 vuex。同样的，先不要管构建工具，以跟着文档里的例子理解用法为主。</p>
    </div>
    <div class="detail-form">
      <div class="detail-form-left">
        <p>购买数量</p>
      </div>
      <div class="detail-form-right">
        <select name="anilysis" id="">
          <option value=""></option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"detail-analysis",
  data(){
    return{
    }
  },
  
 
 
  
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

