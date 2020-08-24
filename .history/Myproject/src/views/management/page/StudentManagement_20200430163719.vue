<template>
  <div class="SM-container">
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
        <el-form-item label="课程名称">
          <el-input v-model="form.COURSE_NAME"></el-input>
        </el-form-item>
        <el-form-item label="课程学分">
          <el-input v-model="form.COURSE_CREDIT"></el-input>
        </el-form-item>
        <el-form-item label="开课教室">
          <el-input v-model="form.COURSE_ROOM"></el-input>
        </el-form-item>
        <el-form-item label="上课人数">
          <el-input v-model="form.COURSE_NUMBER"></el-input>
        </el-form-item>
        <el-form-item label="开课时间">
          <el-input v-model="form.COURSE_START"></el-input>
        </el-form-item>
        <el-form-item label="考试时间">
          <el-input v-model="form.COURSE_TESTTIME"></el-input>
        </el-form-item>
        <el-form-item label="考试类型">
          <el-input v-model="form.COURSE_ATTRIBUTE"></el-input>
        </el-form-item>
        <el-form-item label="课程图片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="任课老师">
          <el-input v-model="form.TEACHER_NAME"></el-input>
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
       editVisible: false,
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
    }
  }
};
</script>

<style>
.SM-container {
  margin: 60px;
}
</style>
