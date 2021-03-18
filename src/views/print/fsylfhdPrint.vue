/*
* 附属油料发放通知
* @Author: HX
* @Date:
*/
<template>

  <div class="containPrint">
      <div class="printTable">
        <h1 class="text-center">附属油料发放通知</h1>
        <el-row>
          <el-col  :span="18">申请单位:</el-col>
          <el-col  :span="6">填发日期:</el-col>
        </el-row>
        <el-row>
          <el-col :span="23">
            <el-table

              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                header-align="center"
                align="left"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
                prop="date"
                header-align="center"
                align="left"
                label="油料代码"
                width="130">
              </el-table-column>
              <el-table-column
                prop="date"
                label="油料名称"
                header-align="center"
                align="left"

                width="180">
              </el-table-column>
                  <el-table-column
                    prop="province"
                    label="包装规格|(千克/桶、箱)"
                    header-align="center"
                    :render-header="renderheader"
                    align="left"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="数量|(桶、箱)"
                    header-align="center"
                    align="left"
                    :render-header="renderheader"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    header-align="center"
                    align="left"
                    label="总重量|(千克)"
                    :render-header="renderheader"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="申请发油单位"
                    header-align="center"
                    align="left"
                    width="180">
                  </el-table-column>
              <el-table-column
                prop="date"
                label="备注"
                header-align="center"
                align="left"
                width="130">
              </el-table-column>

            </el-table>
            <el-row>
              <el-col  :span="7"  :offset="1" >长:</el-col>
              <el-col  :span="8">联系人:</el-col>
              <el-col  :span="8">联系方式:</el-col>

            </el-row>
            <el-row>
              <el-col  :span="24">收货地址:</el-col>

            </el-row>
          </el-col>
          <el-col :span="1" >
            <el-row>
              <el-col :span="12" >第一联:存根</el-col>
              <el-col :span="12" >第二联:上级油料部门</el-col>
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
