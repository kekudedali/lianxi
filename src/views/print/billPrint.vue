/*
* 打印模板
* @Author: HX
* @Date:
*/
<template>

  <div class="tjdPrint">
    <div id="printTable"  v-for="item in bill">
      <h1 class="h1-page">{{item.requestDeptName}}请领单</h1>
      <el-row class="row">
        <el-col :span="6">&nbsp;&nbsp;<span>请领单号：{{ item.requestId }}</span></el-col>
        <el-col :span="8">&nbsp;&nbsp;<span>请领机构：{{ item.requestDeptName }}</span></el-col>
        <el-col :span="10">&nbsp;&nbsp;<span>发货要求：{{ item.sendDemand }}</span></el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="6">&nbsp;&nbsp;<span>收货人：{{ item.recName }}</span></el-col>
        <el-col :span="8">&nbsp;&nbsp;<span>收货电话：{{ item.recPhone }}</span></el-col>
        <el-col :span="10">&nbsp;&nbsp;<span>收货地址：{{ item.recAddress }}</span></el-col>

      </el-row>
      <!--<el-row class="row">-->
        <!--<el-col :span="24">&nbsp;&nbsp;<span>收货地址：{{ item.recAddress }}</span></el-col>-->
        <!--&lt;!&ndash;<el-col :span="12">&nbsp;&nbsp;<span>收货电话：{{ fpdInfo.cFpxzmc }}</span></el-col>&ndash;&gt;-->
      <!--</el-row>-->


      <table class="table-page">
        <tr>
          <td height="40" style="width:40%;">油品名称</td>
          <td style="width:20%;">请领数量</td>
          <td style="width:20%;">供货机构</td>
          <td style="width:20%;">供货仓库</td>
          <!--<td>有齿无齿</td>-->
          <!--<td>材质特征</td>-->
          <!--<td>封片特征</td>-->
          <!--<td>计量属性</td>-->
          <!--<td>数量</td>-->
          <!--<td>售价</td>-->
          <!--<td>售价总额</td>-->
          <!--<td>结算价</td>-->
          <!--<td>结算价总额</td>-->
        </tr>
        <tr v-for="pp in item.cNjxx">

          <td height="40">{{pp.productName}}</td>
          <td style="text-align: center">{{pp.requestCount}}</td>
          <td>{{pp.supplyDeptName}}</td>
          <td>{{pp.warehouseDeptName}}</td>

        </tr>
        <tr>
          <td height="40"  class="hj">合计</td>

          <td style="text-align: center">&nbsp;&nbsp;{{item.nZsl}}</td>
          <td style="text-align: center">&nbsp;&nbsp;-------</td>
          <td style="text-align: center">&nbsp;&nbsp;-------</td>

        </tr>
      </table>
      <el-row class="row">
        <el-col :span="12">&nbsp;&nbsp;<span>填报机构：{{ item.createDeptName }}</span></el-col>
        <el-col :span="12">&nbsp;&nbsp;<span>填报人员：</span></el-col>
      </el-row>
    </div>
  </div>

</template>

<style lang="scss">
  .tjdPrint {
    padding-top: 1px;

  .row {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 60px;
    border: 1px solid #000000;
  }

  .row span {
    font-size: 16px
  }

  #printTable {
    display: none
  }

  @media print {
    #printTable {
      display: block;
    }
  }

  .h1-page {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  .table-page {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-spacing: 0;
    border-collapse: collapse
  }

  .table-page tr td {
    border: 1px solid #000000;

  .divcss5-td-1 {
    width: 500px;
  }

  }

  .hj {
    text-align: center;
  }

  }
</style>

<script>
  import {listBill} from "@/api/request/bill";
  import {getDetail} from "@/api/request/detail";

  export default {
    name: "BillPrint",
    props: ["bill"],
    data() {
      return {
        fpdInfo: {},
        // ppInfo: [],
        nZsl: 0,
        nSjze: '',
        nJsjze: ''
      }
    },
    methods: {
      init() {
        // this.ppInfo = this.bill
      },

    },
    created(){


    },
    mounted() {
      this.init();
    },
    watch: {
      // bill: function (newValue,oldValue) {
      //   // this.init();
      // }
    },
    filters: {
      Fixed: function (val) {
        // if (val > 0) {
        //   return (val / 10000).toFixed(4);
        // } else {
        //   return val;
        // }

      }
    },
  }

</script>
