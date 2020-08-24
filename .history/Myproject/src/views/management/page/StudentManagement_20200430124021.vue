<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      border
    >
      <el-table-column type="selection" width="50" label="全选"></el-table-column>
      <el-table-column width="210" label="编号" prop="_id"></el-table-column>
      <el-table-column width="150" label="课程名称" prop="COURSE_NAME"></el-table-column>
      <el-table-column width="80" label="课程学分" prop="COURSE_CREDIT"></el-table-column>
      <el-table-column width="80" label="开课教室" prop="COURSE_ROOM"></el-table-column>
      <el-table-column width="80" label="上课人数" prop="COURSE_NUMBER"></el-table-column>
      <el-table-column width="80" label="开课时间" prop="COURSE_START"></el-table-column>
      <el-table-column width="80" label="考试时间" prop="COURSE_TESTTIME"></el-table-column>
      <el-table-column width="80" label="考试类型" prop="COURSE_ATTRIBUTE"></el-table-column>
      <!-- 图片-->
      <el-table-column label="头像(查看大图)" align="center" width="180" prop="COURSE_IMAGE">
        <template slot-scope="scope">
          <el-image
            style="width:50px;height:50px"
            class="table-td-thumb"
            :src="scope.row.COURSE_IMAGE"
            :preview-src-list="[scope.row.COURSE_IMAGE]"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column width="80" label="任课老师" prop="TEACHER_NAME"></el-table-column>
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
      this.getdata();
    },
  }
};
</script>

<style>
</style>
