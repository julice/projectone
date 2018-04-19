<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">选择产品
        <vslection :vselect = "productlist" @onchange = "productchange"></vslection>
      </div>
      <div class="order-list-option">
        开始日期：
        
      </div>
      <div class="order-list-option">
        结束日期：
        
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model="query" class="order-query">
      </div>

      <div class="clear"></div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th></th>
        </tr>
      </table>
    </div>
    
   
    
  </div>
</template>

<script>
import vslection from '../components/vslection'

export default {
  name: 'orderList',
  components: {
    vslection
  },
 
  data(){
    return{
      query:'',
      productId : 0,
      productlist:[
        {label:'数据统计',value:1},
        {label:'数据预测',value:2,hot:true},
        {label:'数据分析',value:3},
        {label:'广告发布',value:4},
      ]

    }
  },
  methods: {
    productchange(obj){
      console.log(obj)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-wrap{width: 1200px;height: 50px;margin: 0 auto;margin-top: 30px;font-size: 20px;}
.order-list-option{display: inline-block;padding-left: 15px;}
.order-list-option:first-child{padding-left: 0;}
.order-query{height: 25px;line-height: 25px;border: 1px solid #e3e3e3;outline: none;text-indent: 10px;}
select{height: 30px;padding: 0 10px;font-size: 16px;line-height: 28px;}
</style>

