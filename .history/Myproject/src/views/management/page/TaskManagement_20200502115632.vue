<template>
  <div class="TM-container">
    <div class="add">
      <el-button
        @click="handleAdd()"
      >新增作业</el-button>
    </div>
    <el-page-header @back="goback" content="发布作业信息" class="header"></el-page-header>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column width="210" label="作业编号" prop="_id"></el-table-column>
      <el-table-column width="180" label="作业名称" prop="Taskname"></el-table-column>
      <el-table-column width="180" label="作业题号" prop="Tasksequence"></el-table-column>
      <el-table-column width="180" label="作业题目" prop="Tasktitle"></el-table-column>
      <el-table-column width="180" label="作业答案" prop="Taskanswer"></el-table-column>

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

     <!-- 新增弹出框 -->
    <el-dialog title="新增课程" :visible.sync="addVisible" width="30%">
      <el-form ref="addform" :model="addform" label-width="70px">
        <el-form-item label="作业名称">
          <el-input v-model="addform.Taskname"></el-input>
        </el-form-item>
        <el-form-item label="作业题号">
          <el-input v-model="addform.Tasksequence"></el-input>
        </el-form-item>
        <el-form-item label="作业题目">
          <el-input v-model="addform.Taskanswer"></el-input>
        </el-form-item>
        <el-form-item label="作业答案">
          <el-input v-model="addform.Taskevaluate"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible=false">取消</el-button>
        <el-button type="primary" @click=" addtaskinfo()">确 定</el-button>
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
      addform: {},
       addVisible: false,
    };
  },
  methods: {
    //新增作业
    addtaskinfo(){
      axios({
        url:url.addtaskinfo,
        method:'post',
        data:{
          taskinfo:this.addform
        }
      }).then(response=>{
        if(response.data.code == 200 ){
          this.$message.success('新增成功！')
        }
      })
    },
    // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
    },
    goback() {
      this.$router.go(-1);
    },
    handleAdd() {
      this.addVisible = true;
    },
     //编辑
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
    },
      // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          axios({
            url: url.deletecoursesinfo,
            method: "post",
            data: {
              coursename: this.tableData[index].COURSE_NAME
            }
          }).then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.message) {
              let msg = response.data.message;
              this.$message.success(msg);
              this.$message.success("删除成功");
              this.tableData.splice(index, 1);
              console.log(this.tableData[index].COURSE_NAME);
            }
          });
        })
        .catch(() => {});
    },
     //数据库删除
    deletecourseinfo() {
      axios({
        url: url.deletecoursesinfo,
        method: "post",
        data: {
          _id: this.tableData._id
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          let msg = response.data.message;

          this.$message.success(msg);
        }
      });
    },

    // 保存编辑
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    },
  }
};
</script>

<style>
</style>