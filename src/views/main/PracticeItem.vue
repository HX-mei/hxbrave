<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2019年" placement="top">
        <el-card >
          <h4>汉衣冠网</h4><br>
          <p>
            <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->
            大学期间在做完课上练习后,还有过一些基于课程的小型项目开发经验。
            基于html、css、js,自己构建网页,有了属于自己的第一个静态网站。
          </p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022年" placement="top">
        <el-card>
          <h4>Echarts数据可视化案例</h4><br>
          <p>基于Echarts官网文档以及CSDN相关博客,对实现数据可视化的各种图表案例进行练习。</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022年" placement="top">
        <el-card>
          <h4>个人简历</h4><br>
          <p>基于Vue + VueRouter + ElementUI的个人简历网站。</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "PracticeItem",
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-timeline-item{
  height: 180px;
}
.timestamp{
  color: black;
}
.el-card{
  background-color: rgba(236, 236, 236, 0.59);
}
</style>