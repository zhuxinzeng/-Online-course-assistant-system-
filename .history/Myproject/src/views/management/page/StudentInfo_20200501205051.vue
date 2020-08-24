<template>
  <div class="SI-container">
    <el-page-header @back="goback" content="学生成绩查看" class="header"></el-page-header>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column width="210" label="编号" prop="_id"></el-table-column>
      <el-table-column width="180" label="学号" prop="studentid"></el-table-column>
      <el-table-column width="180" label="姓名" prop="name"></el-table-column>
      <el-table-column width="180" label="专业" prop="major"></el-table-column>
      <el-table-column width="180" label="成绩" prop="result"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页导航-->
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="query.pageIndex"
        :page-size="query.pageSize"
        :total="pageTotal"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
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
      form: {}
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
    }, // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
    },
    goback() {
      this.$router.go(-1);
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