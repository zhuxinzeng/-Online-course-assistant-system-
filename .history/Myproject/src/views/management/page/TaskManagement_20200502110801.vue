<template>
  <div class="TM-container">
    
      <el-button
        @click="handleAdd()"
        mini
        type="text"
        icon="新增课程"
      ></el-button>

    <el-page-header @back="goback" content="发布作业信息" class="header"></el-page-header>
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

     <!-- 新增弹出框 -->
    <el-dialog title="新增课程" :visible.sync="addVisible" width="30%">
      <el-form ref="addform" :model="form" label-width="70px">
        <el-form-item label="课程名称">
          <el-input v-model="addform.COURSE_NAME"></el-input>
        </el-form-item>
        <el-form-item label="课程学分">
          <el-input v-model="addform.COURSE_CREDIT"></el-input>
        </el-form-item>
        <el-form-item label="开课教室">
          <el-input v-model="addform.COURSE_ROOM"></el-input>
        </el-form-item>
        <el-form-item label="上课人数">
          <el-input v-model="addform.COURSE_NUMBER"></el-input>
        </el-form-item>
        <el-form-item label="开课时间">
          <el-input v-model="addform.COURSE_START"></el-input>
        </el-form-item>
        <el-form-item label="考试时间">
          <el-input v-model="addform.COURSE_TESTTIME"></el-input>
        </el-form-item>
        <el-form-item label="考试类型">
          <el-input v-model="addform.COURSE_ATTRIBUTE"></el-input>
        </el-form-item>
        <el-form-item label="课程图片">
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          
        </el-form-item>
        <el-form-item label="任课老师">
          <el-input v-model="addform.TEACHER_NAME"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible=false">新 增</el-button>
        <el-button type="primary" @click=" addcourseinfo()">确 定</el-button>
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
       addVisible: false,
    };
  },
  methods: {
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
    }
  }
};
</script>

<style>
</style>