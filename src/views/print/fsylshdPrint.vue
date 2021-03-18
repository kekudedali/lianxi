/*
* 附属油料审核单
* @Author: HX
* @Date:
*/
<template>

  <div class="containPrint">
      <div class="printTable">
        <h1 class="text-center">附属油料审核单</h1>
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
                label="油料编码"
                width="80">
              </el-table-column>
              <el-table-column
                prop="date"
                label="油料名称"
                header-align="center"
                align="left"

                width="120">
              </el-table-column>

                <el-table-column label="申请情况" header-align="center" align="left">
                  <el-table-column
                    prop="province"
                    label="包装规格|(千克/桶、箱)"
                    :render-header="renderheader"
                    header-align="center"
                    align="left"
                    width="110">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="数量|(桶、箱)"
                    header-align="center"
                    :render-header="renderheader"
                    align="left"
                    width="75">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    header-align="center"
                    align="left"
                    label="总重量|(千克)"
                    :render-header="renderheader"
                    width="70">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="申请发油单位"
                    header-align="center"
                    align="left"
                    width="80">
                  </el-table-column>
                </el-table-column>

                <el-table-column label="审核情况" header-align="center" align="left">
                  <el-table-column
                    prop="province"
                    label="包装规格|(千克/桶、箱)"
                    :render-header="renderheader"
                    header-align="center"
                    align="left"
                    width="110">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="数量|(桶、箱)"
                    header-align="center"
                    :render-header="renderheader"
                    align="left"
                    width="75">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    header-align="center"
                    align="left"
                    label="总重量|(千克)"
                    :render-header="renderheader"
                    width="70">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="发油单位"
                    header-align="center"
                    align="left"
                    width="80">
                  </el-table-column>
                </el-table-column>

              <el-table-column
                prop="date"
                label="备注"
                header-align="center"
                align="left"
                width="60">
              </el-table-column>
              <div slot="append">
                <el-row>
                  <el-col :span="12">
                    <el-row>
                      <el-col style="width: 50px;border-right: 1px solid #000000;padding: 15px">申请单位</el-col>
                      <el-col :span="20">
                        <el-row style="height: 40px;padding:15px">
                          <el-col :span="24">单位名称:</el-col>
                        </el-row>
                        <el-row style="height: 40px;padding:15px">

                          <el-col :span="9" :offset="3">长:</el-col>
                          <el-col :span="12">经办人:</el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="12">
                    <el-row>
                      <el-col style="width: 85px;border-right: 1px solid #000000;padding:15px 15px 15px 50px">审核单位</el-col>
                      <el-col :span="18">
                        <el-row style="height: 40px;padding:15px">
                          <el-col :span="24">单位名称:</el-col>
                        </el-row>
                        <el-row style="height: 40px;padding:15px">

                          <el-col :span="9" :offset="3">长:</el-col>
                          <el-col :span="12">经办人:</el-col>
                        </el-row>
                      </el-col>
                    </el-row>

                  </el-col>
                </el-row>
              </div>
            </el-table>
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
