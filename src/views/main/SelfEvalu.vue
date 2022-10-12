<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <h2>自我评价</h2>
          <hr />
        </div>
      </el-header>
      <br />
      <el-main>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in dataimg" :key="item.value">
            <div class="grid-content">
              <el-col :md="12" :offset="6">
                <div>
                  <img :src="item.src" />
                  <p class="italictext">{{ item.txt }}</p>
                  <!-- <span class="service">{{ item.txt2 }}</span>
                  <p class="last">{{ item.txt3 }}</p> -->
                </div>
              </el-col>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "SelfEvalu",
  data() {
    return {
      dataimg: [
        {
          src: require("../../assets/images/3.jpg"),
          txt: '喜欢钻研新技术，良好的沟通能力，能快速融入团队。易和人相处，拥有良好的亲和力。',
        //   txt2: "一站式服务",
        //   txt3: "Miami, FL",
        },
        {
          src: require("../../assets/images/4.jpg"),
          txt: '做事有责任感，工作认真踏实，性格开朗，遇事乐观，积极上进，吃苦耐劳。面对强压能保持良好的工作状态，善于自我调节。',
        //   txt2: "国际服务",
        //   txt3: "Greensboro, NC",
        },
        {
          src: require("../../assets/images/5.jpg"),
          txt: '热爱代码，喜欢迎接不同挑战。具有很强的自学能力和良好的学习方法,喜欢在自己的博客上记录学习和研发历程。',
        //   txt2: "全网渠道",
        //   txt3: "Charlotte, NC",
        },
      ],
    };
  },
};
</script>
<style scoped>
.el-header {
  margin-top: 45px;
}
h2 {
  text-align: center;
  color: #9d653d;
}
hr {
  width: 100px;
}
img{
    width: 280px;
    height: 215px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #E3A869;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #E3A869;
}
</style>