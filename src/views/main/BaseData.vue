<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>个人信息</span>
            </div>
            <div class="text item">
              <p>姓名：胡晓蝶</p>
              <p>性别：女</p>
              <p>年龄:23岁</p>
              <p>籍贯：安徽-亳州</p>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>院校专业</span>
            </div>
            <div class="text item">
              <p>院校:江苏海事职业技术学院</p>
              <p>专业：软件技术</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>学习技能</span>
            </div>
            <div class="text item">
              <p>熟悉前端基础知识HTML CSS Javascript</p>
              <p>了解BOM与DOM、ES6、AJAX</p>
              <p>熟悉Vue2及其周边Vuex、Vue-router、ElementUI等,了解Vue原理</p>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>联系方式</span>
            </div>
            <div class="text item">
              <p>电话:18020159656</p>
              <p>邮箱:2826406800@qq.com</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #F5DEB3;
  margin-top: 50px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 300px;
  text-align: center;
  background-color: rgba(236, 236, 236, 0.59);
}
</style>