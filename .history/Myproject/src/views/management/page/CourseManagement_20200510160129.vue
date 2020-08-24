<template>
  <div class="CM-container">
    <el-page-header @back="goback" class="header"></el-page-header>
    <div class="table">
      <!-- <div class="handlebox">
        <el-button
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          @click="delAllSelection"
        >批量删除</el-button>
     <el-select v-model="data" placeholder="地址" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                 <el-input v-model="data" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      </div>-->
      <div class="add">
        <button @click="handleAdd()">新增课程</button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column width="210" label="编号" prop="_id"></el-table-column>
        <el-table-column width="150" label="课程名称" prop="COURSE_NAME"></el-table-column>
        <el-table-column width="80" label="课程学分" prop="COURSE_CREDIT"></el-table-column>
        <el-table-column width="80" label="开课教室" prop="COURSE_ROOM"></el-table-column>
        <el-table-column width="80" label="上课人数" prop="COURSE_NUMBER"></el-table-column>
        <el-table-column width="80" label="开课时间" prop="COURSE_START"></el-table-column>
        <el-table-column width="80" label="考试时间" prop="COURSE_TESTTIME"></el-table-column>
        <el-table-column width="80" label="考试类型" prop="COURSE_ATTRIBUTE"></el-table-column>
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看学生</el-button>
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
          <el-upload
            class="upload-pic"
            list-type="picture"
            :action="domain"
            :data="QiniuData"
            :on-error="uploadError"
            :on-success="uploadSuccess"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false"
          >
            <img v-if="imageurl" :src="imageurl" class="uploadavatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
        <el-form-item label="课程图片"></el-form-item>
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
  data() {
    return {
      query: {
        pageIndex: 1,
        pageSize: 5
      },
      tableData: [],
      data: "",
      form: {},
      addform: {},
      idx: -1,
      pageTotal: 10,
      mtulipleSelection: [],
      delList: [],
      addVisible: false,
      editVisible: false,
      coursename: "",
      domain: "http://upload.qiniup.com", // 七牛云的上传地址（华东区）
      qiniuaddr: "q9ojmk5ld.bkt.clouddn.com", // 七牛云的图片外链地址
      imageurl: "", //提交到后台图片地址
      uploadPicUrl: "",
      avatar_img: ""
    };
  },
  created() {
    this.getdata();
    this.getQiniuToken();
  },
  methods: {
    goback() {
      this.$router.push("/Adminhome");
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.mtulipleSelection);
    },
    //批量删除
    delAllSelection() {
      const length = this.multipleSelection.length;
      let str = "";
      this.delList = this.delList.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error(`删除了${str}`);
      this.multipleSelection = [];
    },
    //新增弹窗
    handleAdd() {
      this.addVisible = true;
    },
    //编辑
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
    },

    //编辑课程信息
    editdcourseinfo() {
      axios({
        url: url.changecoursesinfo,
        method: "post",
        data: {
          coursesinfo: this.form
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
    // 保存编辑
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
    },
    //得到课程信息
    getdata() {
      axios({
        url: url.getcoursesinfo,
        method: "post",
        data: {
          pageindex: this.query.pageIndex
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          this.tableData = response.data.message;

          this.$message.success("获取课程信息成功！");
        }
      });
    },
    //新增课程
    addcourseinfo() {
      axios({
        url: url.addcourseinfo,
        method: "post",
        data: {
          courseinfo: this.addform
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          let msg = response.data.message;
          this.$message.success(msg);
          this.addVisible = false;
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
    //上传成功时进行的操作
    uploadSuccess(response, file) {
      this.imageurl = URL.createObjectURL(file.raw);
      this.uploadPicUrl = `http://${this.qiniuaddr}/${response.key}`;
    },
    //上传失败时进行的操作
    uploadError(err, file) {
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    //提交数据到后台
    handleSubmit() {
      axios({
        url: url.getimgurl,
        method: "post",
        data: {
          imgurl: this.uploadPicUrl,
          _id: sessionStorage.getItem("adminuser_id")
        }
      }).then(response => {
        if (response.data.code == 200) {
          let msg = response.data.message;
          this.$message.success(msg);
        }
      });
    },

    getQiniuToken() {
      axios({
        url: url.getQiniuToken,
        method: "get"
      }).then(response => {
        console.log(response);

        this.QiniuData.token = response.data.qiniuToken;
      });
    },
    // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
      this.getdata();
    }
  }
};
</script>

<style >
.CM-container {
  width: 93%;
  height: 800px;
  margin: 30px auto;
  margin-left: 45px;
}
.CM-container .header {
  position: relative;
  top: -3px;
}
.CM-container .handlebox {
  width: 90%;
  height: 50px;
}
.CM-container .pagination {
  position: absolute;
  right: 42px;
}
.CM-container .add {
  width: 100px;
  height: 15px;
  position: relative;
  top: -40px;
  left: 100px;
}
.CM-container .add button {
  position: relative;
  top: 10px;
  box-shadow: 0 0 1px;
  border-radius: 5px;
  outline: none;
  height: 30px;
  width: 100px;
  color: #7e7d7d;
}
.CM-container .add button:hover {
  color: #e26a6a;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.upload-pic {
  border-radius: 6px;
  cursor: pointer;
  width: 178px;
  height: 178px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d9d9d9;
}
.upload-pic .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.upload-ipc .el-upload:hover {
  border-color: #409eff;
}
.upload-pic .uploadavatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>