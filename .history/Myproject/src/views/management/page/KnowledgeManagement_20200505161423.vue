<template>
  <div class="KM-container">
    <el-page-header @back="goback" class="header"></el-page-header>
    <div class="add">
      <button @click="handleAdd()">新增知识检测</button>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
        <el-table-column width="80" label="编号" prop="Checksequence"></el-table-column>
         <el-table-column width="200" label="课程ID" prop="_id"></el-table-column>
        <el-table-column width="180" label="名称" prop="Checkname"></el-table-column>
        <el-table-column width="180" label="分数" prop="Checkscore"></el-table-column>
        <el-table-column width="100" label="题目数量" prop="Checknumber"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleAddoptions(scope.$index, scope.row)">添加题目</el-button>
            <el-button size="mini" @click="checkexamoptions()">查看题目</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除知识检测</el-button>
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

    <!-- 新增知识检测弹出框 -->
    <el-dialog title="新增知识检测" :visible.sync="addVisible" width="500px">
      <el-form ref="addform" :model="addform" label-width="90px">
           <el-form-item label="编号">
          <el-input v-model="addform.Checksequence"></el-input>
        </el-form-item>
        <el-form-item label="检测名称">
          <el-input v-model="addform.Checkname"></el-input>
        </el-form-item>
        <el-form-item label="检测分数">
          <el-input v-model="addform.Checkscore"></el-input>
        </el-form-item>
        <el-form-item label="题目数量">
          <el-input v-model="addform.Checknumber"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible=false">取消</el-button>
        <el-button type="primary" @click=" addKnowledgeinfo()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑知识检测" :visible.sync="editVisible" width="500px">
      <el-form ref="form" :model="form" label-width="90px">
     
        <el-form-item label="名称">
          <el-input v-model="form.Checkname"></el-input>
        </el-form-item>
        <el-form-item label="分数">
          <el-input type="textarea" v-model="form.Checkscore"></el-input>
        </el-form-item>
        <el-form-item label="题目数量">
          <el-input type="textarea" v-model="form.Checknumber"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible=false">取消</el-button>
        <el-button type="primary" @click=" editknowledgeinfo()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 选项添加弹出框 -->
    <el-dialog title="添加选项" :visible.sync="optionsVisible" width="500px">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="知识检测名称">
          <el-input v-model="form.examname"></el-input>
        </el-form-item>
          <el-form-item label="题目类型">
          <el-input v-model="form.Topictypes"></el-input>
        </el-form-item>
        <el-form-item label="序号">
          <el-input v-model="form.ques_sequence"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input type="textarea" v-model="form.ques_title"></el-input>
        </el-form-item>
        <el-form-item label="选项A">
          <el-input v-model="form.options_list_a"></el-input>
        </el-form-item>
        <el-form-item label="选项B">
          <el-input v-model="form.options_list_b"></el-input>
        </el-form-item>
        <el-form-item label="选项C">
          <el-input v-model="form.options_list_c"></el-input>
        </el-form-item>
        <el-form-item label="选项D">
          <el-input v-model="form.options_list_d"></el-input>
        </el-form-item>
           <el-form-item label="正确答案">
          <el-input v-model="form.correctanswer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="optionsVisible=false">取消</el-button>
        <el-button type="primary" @click=" addoptions()">确 定</el-button>
      </span>
    </el-dialog>

<el-dialog
  title="提示"
  :visible.sync="checkoptionsVisible"
  width="30%"
  >
   <div v-for="(item,index) in checkoptions" :key="index"> <span > {{item.ques_sequence}}</span></div>
 
  <span slot="footer" class="dialog-footer">
    <el-button @click="checkoptionsVisible = false">取 消</el-button>
    <el-button type="primary" @click="checkoptionsVisible = false">确 定</el-button>
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
      ques_number: 1,
      newform: {
        examname: "",
        ques_sequence: "",
        ques_title: "",
        options_list: {
          options_title: ""
        }
      },
      addform: {},
      addVisible: false,
      editVisible: false,
      optionsVisible: false,
      value: "",
      exam_id: "",
      order: "",
      checkoptions: {},
      checkoptionsVisible:false
    };
  },
  created() {
    this.getKnowledgeinfo();
  },
  methods: {
    //知识检测选项增加
    handleAddoptions() {
      this.optionsVisible = true;
    },
    handleAdd() {
      this.addVisible = true;
    },
    //新增知识检测
    addKnowledgeinfo() {
      axios({
        url: url.addKnowledgeinfo,
        method: "post",
        data: {
          Knowledgeinfo: this.addform
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200) {
          this.exam_id = response.data.message._id;
          console.log(this.exam_id);
          this.addVisible = false;
          this.$message.success("新增成功！");
          this.getKnowledgeinfo();
        }
      });
    },
    //新增知识检测选项
    addoptions() {
      axios({
        url: url.addexamoptionsinfo,
        method: "post",
        data: {
          examoptions: this.form
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200) {
          this.$message.success("新增成功！");
        }
      });
      this.optionsVisible = false;
    },
    //获取知识检测信息
    getKnowledgeinfo() {
      axios({
        url: url.getKnowledgeinfo,
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
    //查看已添加知识检测选项
    checkexamoptions() {
      axios({
        url: url.getexamoptionsinfo,
        method: "post",
        data: {}
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          this.checkoptions = response.data.message;
          this.checkoptionsVisible = true
          
        }
      });
    },
    //编辑
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
    },
    //编辑知识检测信息
    editknowledgeinfo() {
      axios({
        url: url.editknowledgeinfo,
        method: "post",
        data: {
        knowledgenfo: this.form
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
    // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          axios({
            url: url.deleteexaminfo,
            method: "post",
            data: {
              examname: this.tableData[index].examname
            }
          }).then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.message) {
              let msg = response.data.message;
              this.$message.success(msg);
              this.tableData.splice(index, 1);
            }
          });
        })
        .catch(() => {});
    },
    // 分页导航
    handlePageChange(val) {
      console.log(`当前页: ${val}`);
      this.query.pageIndex = val;
      console.log(this.query.pageIndex);
    },

    goback() {
      this.$router.push("/Adminhome");
    },
   
  }
};
</script>

<style>
.KM-container {
  width: 93%;
  height: 800px;
  margin: 30px auto;
  margin-left: 45px;
}
.KM-container .header {
  position: relative;
  top: -3px;
}
.KM-container .add {
  width: 100px;
  height: 15px;
  position: relative;
  top: -40px;
  left: 100px;
}
.KM-container .add button {
  position: relative;
  top: 10px;
  outline: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  color: #7e7d7d;
}
.KM-container .add button:hover {
  color: #e26a6a;
}
.KM-container .pagination {
  position: absolute;
  right: 42px;
}
</style>