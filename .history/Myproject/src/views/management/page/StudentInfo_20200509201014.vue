<template>
  <div class="SI-container">
    <el-page-header @back="goback" content="学生成绩查看" class="header"></el-page-header>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column width="210" label="编号" prop="_id"></el-table-column>
      <el-table-column width="180" label="学号" prop="studentid"></el-table-column>
      <el-table-column width="180" label="姓名" prop="name"></el-table-column>
      <el-table-column width="180" label="专业" prop="major"></el-table-column>
      <el-table-column width="180" label="成绩" prop="result"></el-table-column>
      <el-table-column width="180" label="总评分" prop="medal"></el-table-column>
      <el-table-column label="打评">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleRate(scope.$index, scope.row)">打评</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页导航-->
    <div class="pagination">
      <el-pagination
        background
        nn
        layout="total, prev, pager, next"
        :current-page="query.pageIndex"
        :page-size="query.pageSize"
        :total="pageTotal"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
    <!-- 打评弹出框 -->
    <el-dialog title="编辑" :visible.sync="rateVisible" width="30%">
     
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-rate
            v-model="form.rate"
            show-score
            text-color="#ff9900"
            score-template="{form.rate}"
            @change="handRatechange()"
          ></el-rate>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rateVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateRate()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../../serviceAPI.config";

export default {
  name: "",
  data() {
    return {
      tableData: [],
      query: {
        pageIndex: 1,
        pageSize: 5
      },
      pageTotal: 10,
      idx: -1,
      form: {},
      rateVisible: false,
      rate: ""
    };
  },
  created() {
    this.getresult();
  },
  methods: {
    getresult() {
      axios({
        url: url.getstudentresult,
        method: "post",
        data: {}
      }).then(response => {
        if (response.data.code == 200 && response.data.message) {
          this.tableData = response.data.message;
          this.$message.success("获取成功！");
        }
      });
    },
    //更新评分
    updateRate() {
      axios({
        url: url.updateRate,
        method: "post",
        data: {
          medal: this.rate + this.tableData.medal
        }
      }).then(response => {
        if (response.data.code == 200 && response.data.message) {
        }
      });
    },
    // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
    },
    goback() {
      this.$router.go(-1);
    }, //编辑
    handleRate(index, row) {
      this.idx = index;
      this.form = row;
      this.rateVisible = true;
    },
        // 保存编辑
    saveEdit() {
      this.rateVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    },
    handRatechange(value) {
      console.log(this.rate);
    }
  }
};
</script>

<style>
.SI-container {
  margin: 60px;
  width: 90%;
}
.SI-container .header {
  margin-left: -10px;
  margin-top: -30px;
  margin-bottom: 20px;
}
.SI-container .pagination {
  margin-top: 20px;
  margin-left: 83%;
}
</style>