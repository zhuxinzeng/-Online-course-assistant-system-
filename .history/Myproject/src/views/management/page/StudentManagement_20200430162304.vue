<template>
  <div class="SM-container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      border
    >
      <el-table-column width="210" label="编号" prop="_id"></el-table-column>
       <el-table-column width="80" label="学号" prop="studentid"></el-table-column>
      <el-table-column width="100" label="姓名" prop="userName"></el-table-column>
      <el-table-column width="80" label="性别" prop="sex"></el-table-column>
      <el-table-column width="80" label="专业" prop="major"></el-table-column>
      <el-table-column width="80" label="邮箱" prop="email"></el-table-column>
     
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
import axios from 'axios'
import url from  '../../../serviceAPI.config'

export default {
  name: "",
  prop: {},
  component: {},
  data() {
    return {
      tableData: [],
      query: {
        pageIndex: 1,
        pageSize: 5
      },
       pageTotal: 10,
    };
  },
  created() {
    axios({
      url: url.getstudentinfo,
      method: "post",
      data: {
        pageindex: this.query.pageIndex
      }
    }).then(response => {
      console.log(response);
      if (response.data.code == 200 && response.data.message) {
        this.tableData = response.data.message;
        this.$message.success("获取成功！");
      }
    });
  },
  methods:{
      // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
     
    },
  }
};
</script>

<style>
.SM-container{
    margin:60px;
}

</style>
