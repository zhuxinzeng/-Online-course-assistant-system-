<template>
  <div class="SM-container">
    <el-page-header @back="goBack" content="学生信息管理" class="header"></el-page-header>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column width="210" label="编号" prop="_id"></el-table-column>
      <el-table-column width="120" label="学号" prop="studentid"></el-table-column>
      <el-table-column width="120" label="姓名" prop="userName"></el-table-column>
      <el-table-column width="120" label="性别" prop="sex"></el-table-column>
      <el-table-column width="120" label="专业" prop="major"></el-table-column>
      <el-table-column width="180" label="邮箱" prop="email"></el-table-column>

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
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="编号">
          <el-input v-model="form._id" disabled></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.studentid"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="form.major"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click=" editdcourseinfo()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import url from "../../../serviceAPI.config";

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
      idx: -1,
      form: {},
      editVisible: false
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
  methods: {
    // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
    },
    //编辑
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
    },
    // 保存编辑
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    },
    //编辑课程信息
    editdcourseinfo() {
      axios({
        url: url.updatauserinfo,
        method: "post",
        data: {
          userinfo: this.form
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          let msg = response.data.message;
          this.editVisible = false;
          this.$message.success(`修改第 ${this.idx + 1} 行成功`);
          this.$set(this.tableData, this.idx, this.form);
        }
      });
    },
    // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          axios({
            url: url.deleteuserinfo,
            method: "post",
            data: {
              _id: this.tableData[index]._id
            }
          }).then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.message) {
              let msg = response.data.message;
              this.$message.success(msg);
              this.tableData.splice(index, 1);
              console.log(this.tableData[index]._id);
            }
          });
        })
        .catch(() => {});
    },
    goback(){
        this.$router.go(-1)
    }
  }
};
</script>

<style>
.SM-container {
  margin: 60px;
}
.SM-container .header{
    margin-left: -10px;
}
.SM-container .pagination {
  margin-top: 20px;
  margin-left: 83%;
}
</style>
