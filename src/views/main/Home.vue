<template>
  <div>
    <div class="content">
      <img src="../../assets/images/2.jpg" alt="" />
      <div class="content_r clearfix">
        <div class="content_l clearfix">
          <h2>Hi~ 我是晓蝶同学， Welcome here !</h2>
          <p class="cc">欢迎来到我的主页，一位热爱编程的小渣渣~</p>
          <p class="cc">爱好计算机，会去自学一些感兴趣的东西 !</p>
          <br />
          <p class="color_1">I am an ambitious salted fish!</p>
          <p class="color_1">我是一位有野心的咸鱼!</p>
          <br />
          <p class="deeppink">只要路是对的，就不怕路远。</p>
          <p class="deeppink">
            As long as the road is right, you are not afraid of the distance.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Home',
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.clearfix {
  *zoom: 1;
}
.content {
  width: 750px;
  height: 350px;
  position: relative;
  margin-top: 70px;
  margin-left: 36%;
  border-radius: 10px;
  background-color: rgba(236, 236, 236, 0.59);
  transition: all 1s;
  /*box-shadow: 0px 0px 20px rgba(0,0,0,0.3);*/
}

.content img {
  float: left;
  width: 200px;
  height: 200px;
  margin-top: 30px;
  margin-left: 40px;
  border-radius: 100px;
}

.content:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.52);
}

.content_r {
  float: right;
  width: 500px;
  margin-top: 50px;
}
.content_l {
  float: left;
  width: 100%;
  text-align: center;
}

.content_l h5 {
  font-size: 17px;
}

.cc {
  margin-top: 10px;
  color: #1f2023;
  font-size: 18px;
}

.color_1 {
  color: #4855ec;
  font-size: 18px;
}

.deeppink {
  color: deeppink;
}
.dodgerblue {
  background-color: dodgerblue;
}
</style>