<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">选择产品
        <vslection :vselect = "productlist" @onchange = "productchange"></vslection>
      </div>
      <div class="order-list-option">
        开始日期：
        <calandar @change="changeStartDate"></calandar>
      </div>
      <div class="order-list-option">
        结束日期：
        <calandar @change="changeEndDate"></calandar>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>

      <div class="clear"></div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for = "head in tableHeads" @click = "changeorderType(head)">{{head.label}}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
    <div class="close" @click = "changepath">
      关闭
    </div>
    
   
    
  </div>
</template>

<script>
import vslection from '../components/vslection'
import calandar from '../components/datepicker'

export default {
  name: 'orderList',
  components: {
    vslection,calandar
  },
 
  data(){
    return{
      query:'',
      productId : 0,
      starDate:'',
      endDate:'',
      productlist:[
        {label:'数据统计',value:1},
        {label:'数据预测',value:2,hot:true},
        {label:'数据分析',value:3},
        {label:'广告发布',value:4},
      ],
      tableHeads:[
        {label:'订单号',key:'orderId',active:false},
        {label:'购买产品',key:'product',active:false},
        {label:'版本类型',key:'version',active:false},
        {label:'有效时间',key:'period',active:false},
        {label:'购买日期',key:'date',active:false},
      ],
      tableData:'',

    }
  },
  methods: {
    productchange(obj){
      this.getList();
    },
    changeStartDate(date){
      this.starDate = date;
      this.getList();
    },
    changeEndDate(date){
      this.endDate = date
      this.getList();
    },
    changeorderType(){

    },
    changepath(){
      this.$router.push({path:'/'})
    },
    getList(){
      let reqParam = {
        query:this.query,
        product:this.product,
        starDate:this.starDate,
        endDate:this.endDate
      }
      this.$http.post("api/getOrderList",reqParam).then((res)=>{
        this.tableData = res.data.list
      },(err)=>{
        console.log(err)
      })
    }
  },
  watch: {
    query(){
      this.getList()
    }
  },
  mounted () {
    this.getList()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-wrap{width: 1200px;height: 50px;margin: 0 auto;margin-top: 30px;font-size: 20px;}
.order-list-option{display: inline-block;padding-left: 10px;}
.order-list-option:first-child{padding-left: 0;}
.order-query{height: 25px;line-height: 25px;border: 1px solid #e3e3e3;outline: none;text-indent: 10px;}
select{height: 30px;padding: 0 10px;font-size: 16px;line-height: 28px;}

.order-list-table{margin-top: 20px;}
.order-list-table table{width: 100%;background: #fff}
.order-list-table td,.order-list-table th{border: 1px solid #e3e3e3;text-align: center;padding: 10px 0;}
.order-list-table th{background: #4fc08d;color: #fff;border: 1px solid #4fc08d;cursor: pointer;}

</style>

