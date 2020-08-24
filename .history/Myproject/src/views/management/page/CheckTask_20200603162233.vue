<template>
  <div class="CT-container">
    <el-page-header @back="goback" class="header" content="查看作业"></el-page-header>
   
    <div class="table">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column width="80" label="作业名称" prop="Taskname"></el-table-column>
      <el-table-column width="80" label="作业题号" prop="Tasksequence"></el-table-column>
      <el-table-column width="800" label="作业题目" prop="Tasktitle"></el-table-column>
        <el-table-column width="180" label="学生答案" prop="Studentanswer"></el-table-column>
     

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          
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

    <!-- 查看作业详情弹出框 -->
    <el-dialog title="编辑课程" :visible.sync="editVisible" >
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="作业名称">
          <el-select v-model="form.Taskname" placeholder="请选择" style="width:370px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作业题号">
          <el-input v-model="form.Tasksequence"></el-input>
        </el-form-item>
        <el-form-item label="作业题目"  >
          <el-input type="textarea" v-model="form.Tasktitle" ></el-input>
        </el-form-item>
         <el-form-item label="学生答案">
          <el-input type="textarea" v-model="form.Studentanswer"></el-input>
        </el-form-item>
        <el-form-item label="作业答案">
          <el-input type="textarea" v-model="form.Taskanswer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible=false">取消</el-button>
        <el-button type="primary" @click=" saveEdit()">确 定</el-button>
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
      options: [
        {
          value: "高等数学",
          label: "高等数学"
        },
        {
          value: "Java高级编程",
          label: "Java高级编程"
        },
        {
          value: "大学英语",
          label: "大学英语"
        },
        {
          value: "数据结构",
          label: "数据结构"
        },
        {
          value: "计算机组成原理",
          label: "计算机组成原理"
        }
      ],
      value: ""
    };
  },
  created() {
    this.gettaskinfo();
  },
  methods: {
    //新增作业
    handleAdd() {
      this.addVisible = true;
    },
    addtaskinfo() {
      axios({
        url: url.addtaskinfo,
        method: "post",
        data: {
          taskinfo: this.addform
        }
      }).then(response => {
        if (response.data.code == 200) {
          this.addVisible = false;
         
        }
      });
    },
    //查看作业信息
    gettaskinfo() {
      axios({
        url: url.gettaskinfo,
        method: "post",
        data: {
          pageindex: this.query.pageIndex
        }
      }).then(response => {
        console.log(response);
        if (response.data.code == 200 && response.data.message) {
          this.tableData = response.data.message;

        }
      });
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
    
    },
    // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          axios({
            url:url.deletetaskinfo,
            method: "post",
            data: {
              Taskname: this.tableData[index].Taskname
            }
          }).then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.message) {
              let msg = response.data.message;
              this.$message.success(msg);
              this.$message.success("删除成功");
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
    }
  }
};
</script>

<style>
.CT-container {
  width: 93%;
  height: 800px;
  margin: 30px auto;
  margin-left: 45px;
}
.CT-container .header {
  position: relative;
  bottom: 15px;
}

.CT-container .pagination {
  position: absolute;
  right: 42px;
}
</style>