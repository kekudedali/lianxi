/*
* 油料支拨单
* @Author: HX
* @Date:
*/
<template>

  <div class="containPrint">
      <div class="printTable">
        <div style="text-align: right">
          ( <span style="width: 30px;display: inline-block"></span>)年 <span style="width: 50px;display: inline-block"></span>第 <span style="width: 50px;display: inline-block"></span>号
        </div>
        <h1 class="text-center">油料支拨单</h1>
        <el-row>
          <el-col  :span="6">领油单位:</el-col>
          <el-col  :span="6">指标类别:</el-col>
          <el-col  :span="6">介绍信号:</el-col>
        </el-row>
        <el-row>
          <el-col :span="22">
            <el-table

              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                header-align="center"
                align="left"
                label="领油车号"
                width="90">
              </el-table-column>
              <el-table-column
                prop="date"
                header-align="center"
                align="left"
                label="油料名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="date"
                label="发油鹤位"
                header-align="center"
                align="left"

                width="90">
              </el-table-column>
              <el-table-column
                prop="date"
                label="发油密度"
                header-align="center"
                align="left"

                width="90">
              </el-table-column>
                <el-table-column label="应发数" header-align="center" align="left">
                  <el-table-column
                    prop="province"
                    label="公斤"

                    header-align="center"
                    align="left"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="升"
                    header-align="center"

                    align="left"
                    width="80">
                  </el-table-column>

                </el-table-column>

                <el-table-column label="实发情况" header-align="center" align="left">
                  <el-table-column
                    prop="province"
                    label="起始读数"

                    header-align="center"
                    align="left"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="终止读数"
                    header-align="center"

                    align="left"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    header-align="center"
                    align="left"
                    label="公升"

                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="升"
                    header-align="center"
                    align="left"
                    width="80">
                  </el-table-column>
                </el-table-column>

              <!--<el-table-column-->
                <!--prop="date"-->
                <!--label="备注"-->
                <!--header-align="center"-->
                <!--align="left"-->
                <!--width="80">-->
              <!--</el-table-column>-->
            </el-table>
            <el-row>
              <el-col  :span="6" :offset="2">    长:</el-col>
              <el-col  :span="6">承办人:</el-col>
              <el-col  :span="6">领油人:</el-col>

            </el-row>
            <el-row>
              <el-col  :span="6" :offset="16">填报单位:</el-col>
            </el-row>
            <el-row>
              <el-col  :span="6"  :offset="16">填报日期:</el-col>
            </el-row>
          </el-col>
          <el-col :span="2" >
            <el-row>
              <el-col :span="6" >第一联:存根</el-col>
              <el-col :span="6" >第二联:领油单位油库</el-col>
              <el-col :span="6" >第一联:领油单位机关</el-col>
              <el-col :span="6" >第二联:油库保管队</el-col>
            </el-row>
          </el-col>

        </el-row>

      </div>

  </div>

</template>

<style lang="scss">
  .containPrint {
    padding-top: 1px;
    .printTable{
      table{
        border-bottom: 2px solid #000000;
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
        tableData:[{},{},{}]
      }
    },
    methods: {
      init() {
        console.log(this.bill)
        // this.ppInfo = this.bill
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
