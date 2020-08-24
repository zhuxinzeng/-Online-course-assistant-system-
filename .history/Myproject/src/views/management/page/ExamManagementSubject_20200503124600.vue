<template>
  <div class="ES-container">
    <el-page-header @back="goback" class="header"></el-page-header>
    <div class="add">
      <button @click="handleAdd()">新增题目</button>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
        <el-table-column width="80" label="题目类型" prop="examname"></el-table-column>
        <el-table-column width="80" label="题目序号" prop="examtime"></el-table-column>
        <el-table-column width="580" label="题目名称" prop="examscore"></el-table-column>
        <el-table-column width="500" label="题目选项" prop="ques_number"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="goExamSubject()">添加题目</el-button>
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
    <el-dialog title="新增考试" :visible.sync="addVisible" width="500px">
      <el-form ref="addform" :model="addform" label-width="90px">
        <el-form-item label="题号">

          <el-input v-model="addform.ques_sequence"></el-input>
        </el-form-item>
        <el-form-item label="考试题目">
          <el-input v-model="addform.ques_title"></el-input>
        </el-form-item>
        <el-form-item label="考试选项">
          <el-input v-model="addform.ques_title"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible=false">取消</el-button>
        <el-button type="primary" @click=" addExaminfo()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑课程" :visible.sync="editVisible" width="500px">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="考试名称">
          <el-select v-model="form.examname" placeholder="请选择" style="width:370px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试时间">
          <el-input v-model="form.examtime"></el-input>
        </el-form-item>
        <el-form-item label="考试分数">
          <el-input type="textarea" v-model="form.examscore"></el-input>
        </el-form-item>
        <el-form-item label="题目数量">
          <el-input type="textarea" v-model="form.ques_number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible=false">取消</el-button>
        <el-button type="primary" @click=" editexaminfo()">确 定</el-button>
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
      addform: {},
      addVisible: false,
      editVisible: false,
      optionsVisible: false,
      options: [
        {
          value: "Java高级编程",
          label: "Java高级编程"
        },
        {
          value: "多选题",
          label: "多选题"
        },
        {
          value: "判断题",
          label: "判断题"
        }
      ],
      value: ""
    };
  },
  created() {
    this.getexaminfo();
  },
//   methods: {
//     //考试选项增加
//     addOptions() {
//       this.optionsVisible = true;
//     },

    //新增考试
    handleAdd() {
      this.addVisible = true;
    },

    addExaminfo() {
      axios({
        url: url.addexaminfo,
        method: "post",
        data: {
          examinfo: this.addform
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200) {
          this.addVisible = false;
          this.$message.success("新增成功！");
          this.getexaminfo();
        }
      });
    },
//     //获取考试信息
//     getexaminfo() {
//       axios({
//         url: url.getexaminfo,
//         method: "post",
//         data: {
//           pageindex: this.query.pageIndex
//         }
//       }).then(response => {
//         console.log(response);
//         if (response.data.code == 200 && response.data.message) {
//           this.tableData = response.data.message;

//           this.$message.success("获取课程信息成功！");
//         }
//       });
//     },
//     //编辑
//     handleEdit(index, row) {
//       this.idx = index;
//       this.form = row;
//       this.editVisible = true;
//     },
//     //编辑考试信息
//     editexaminfo() {
//       axios({
//         url: url.editexaminfo,
//         method: "post",
//         data: {
//           taskinfo: this.form
//         }
//       }).then(response => {
//         console.log(response);
//         if (response.data.code == 200 && response.data.message) {
//           let msg = response.data.message;
//           this.editVisible = false;
//           this.$message.success(`修改第 ${this.idx + 1} 行成功`);
//           this.$set(this.tableData, this.idx, this.form);
//         }
//       });
//     },
//     // 保存编辑
//     saveEdit() {
//       this.editVisible = false;
//       this.$message.success(`修改第 ${this.idx + 1} 行成功`);
//       this.$set(this.tableData, this.idx, this.form);
//     },
//     // 删除操作
//     handleDelete(index, row) {
//       // 二次确认删除
//       this.$confirm("确定要删除吗？", "提示", {
//         type: "warning"
//       })
//         .then(() => {
//           axios({
//             url: url.deleteexaminfo,
//             method: "post",
//             data: {
//              examname: this.tableData[index].examname
//             }
//           }).then(response => {
//             console.log(response);
//             if (response.data.code == 200 && response.data.message) {
//               let msg = response.data.message;
//               this.$message.success(msg);
//               this.tableData.splice(index, 1);
//             }
//           });
//         })
//         .catch(() => {});
//     },
//     // 分页导航
//     handlePageChange(val) {
//       console.log(`当前页: ${val}`);
//       this.query.pageIndex = val;
//       console.log(this.query.pageIndex);
//     },
//     goback() {
//       this.$router.push("/Adminhome");
//     }
 // }
};
</script>

<style>
.ES-container {
  width: 93%;
  height: 800px;
  margin: 30px auto;
  margin-left: 45px;
}
.ES-container .header {
  position: relative;
  top: -3px;
}
.ES-container .add {
  width: 100px;
  height: 15px;
  position: relative;
  top: -40px;
  left: 100px;
}
.ES-container .add button {
  position: relative;
  top: 10px;
  outline: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.ES-container .add button:hover {
  color: #e26a6a;
}
.ES-container .pagination {
  position: absolute;
  right: 42px;
}
</style>