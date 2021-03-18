/*
* 库存油料报告表
* @Author: HX
* @Date:
*/
<template>

  <div class="containPrint">
      <div class="printTable" v-for=" (item,index) in arrayData">
        <h1 class="text-center">库存油料报告表</h1>
        <el-row>
          <el-col  :span="6">隶属单位:测试</el-col>
          <el-col  :span="6">隶属单位编码:</el-col>
          <el-col  :span="6">油库名称:</el-col>
          <el-col  :span="6">油库编码:</el-col>
        </el-row>
        <el-row>
          <el-row>
            <el-col :span="6">月份:</el-col>
          </el-row>
        </el-row>
        <template >
          <el-table

            :data="item"
            style="width: 100%">
            <el-table-column
              prop="cPpdh"
              header-align="center"
              align="left"
              label="油料编码"
              width="80">
            </el-table-column>
            <el-table-column
              prop="date"
              label="油料名称"
              header-align="center"
              align="left"

              width="160">
            </el-table-column>
            <el-table-column label="储存油料"
                             header-align="center"
                             align="left"
            >
              <el-table-column
                prop="name"
                header-align="center"
                align="left"
                label="合计|(吨)"
                :render-header="renderheader"
                width="80">
              </el-table-column>
              <el-table-column label="罐装" header-align="center" align="left">
                <el-table-column
                  prop="province"
                  label="罐组号"
                  header-align="center"
                  align="left"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="安全容量|(吨)"
                  :render-header="renderheader"
                  header-align="center"
                  align="left"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="address"
                  header-align="center"
                  align="left"
                  label="油数|(斤)"
                  :render-header="renderheader"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="空容容量(吨)"
                  :render-header="renderheader"
                  header-align="center"
                  align="left"
                  width="80">
                </el-table-column>
              </el-table-column>

              <el-table-column label="桶装" header-align="center" align="left">
                <el-table-column
                  prop="province"
                  label="油桶规格"
                  header-align="center"
                  align="left"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="桶数"
                  header-align="center"
                  align="left"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="油数|(公斤)"
                  :render-header="renderheader"
                  header-align="center"
                  align="left"
                  width="80">
                </el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="date"
              label="质量状况"
              header-align="center"
              align="left"
              width="80">
            </el-table-column>
            <el-table-column
              prop="date"
              label="备注"
              header-align="center"
              align="left"
              width="110">
            </el-table-column>
          </el-table>
          <el-row>
            <el-col  :span="6">制表单位:</el-col>
            <el-col  :span="6">长:</el-col>
            <el-col  :span="6">制表人:</el-col>
            <el-col  :span="6">制表时间:</el-col>
          </el-row>
          <div style="page-break-after: always;"></div>
        </template>

      </div>

  </div>

</template>

<style lang="scss">
  .containPrint {
    padding-top: 1px;
    .printTable{
      table{
        tr{
          th{
            border: 1px solid #000000;
          }
          td{
            border: 1px solid #000000;
          }
        }

      }
    }
  }
</style>

<script>
  import {listBill} from "@/api/request/bill";
  import {getDetail} from "@/api/request/detail";

  export default {
    name: "kcylbgb",
    props: ["bill"],
    data() {
      return {
        fpdInfo: {},
        // ppInfo: [],
        nZsl: 0,
        nSjze: '',
        nJsjze: '',
        arrayData:[],
        tableData:[{cPpdh:1},{cPpdh:2},{cPpdh:3},{cPpdh:4},{cPpdh:5},{cPpdh:6},{cPpdh:7},{cPpdh:8},{cPpdh:9},{cPpdh:10},{cPpdh:11},{cPpdh:12},{cPpdh:13},{cPpdh:14},{cPpdh:15},{cPpdh:16},{cPpdh:17},{cPpdh:18},{cPpdh:19},{cPpdh:20},{cPpdh:21},{cPpdh:22}]
      }
    },
    methods: {
      init() {
        console.log(this.bill)
        console.log( this.tableData.length)

        for(let i = 0;i<Math.ceil(this.tableData.length/8);i++){
          console.log(i)
          var arr = [];
          if(i === 0){
            for(let j =0;j<8;j++){
              let item = this.tableData[j]
              arr.push(item)
            }
          }else{
            for(let j =i*10;j<i*8+8;j++){
              let item = this.tableData[j]
              arr.push(item)
            }
          }
          this.arrayData.push(arr)
        }
        console.warn(this.arrayData)
      },
      renderheader(h, { column, $index }) {
        return h('span', {}, [
          h('span', {}, column.label.split('|')[0]),
          h('br'),
          h('span', {}, column.label.split('|')[1])
        ]);
      }
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
