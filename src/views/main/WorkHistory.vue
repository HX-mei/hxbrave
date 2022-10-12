<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <h2>工作经历</h2>
        <h3>南京软通动力信息技术服务有限公司</h3>
        <ul>
          <li>时间:&nbsp;&nbsp;&nbsp;&nbsp;2021年/7月-2022年/8月</li><br>
          <li>角色:&nbsp;&nbsp;&nbsp;&nbsp;助理工程师</li><br>
          <li>
            职责:<br>
            1、&nbsp;&nbsp;&nbsp;&nbsp;负责对人工智能相关数据进行数据标注和分类;<br>
            2、&nbsp;&nbsp;&nbsp;&nbsp;根据反馈改进标注结果质量,及时跟进标注进度;<br>
            3、&nbsp;&nbsp;&nbsp;&nbsp;能够快速理解学习标注数据的背景知识,精确地完成标注任务;
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "WorkHistory",
  data() {
    return {};
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

h2{
    text-align: center;
}

h3{
    text-align: center;
}

ul{
  text-align: left;
}

.box-card {
  width: 60%;
  height: 90%;
  margin-top: 10%;
  background-color: #dcb180;
}
</style>