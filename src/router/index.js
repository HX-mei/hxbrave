import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Home from '../views/main/Home.vue'
import LayOut from '../views/LayOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'LayOut',
    component: LayOut,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        // meta: {
        //   isLogin: true
        // }
      },
      {
        path: 'basedata',
        name: 'BaseData',
        component: () =>import("../views/main/BaseData.vue"),
        // meta:{
        //   isLogin:true
        // }
      },
      {
        path: 'practiceitem',
        name: 'PracticeItem',
        component: () =>import("../views/main/PracticeItem.vue"),
        // meta:{
        //   isLogin:true
        // }
      },
      {
        path: 'workhistory',
        name: 'WorkHistor',
        component: () =>import("../views/main/WorkHistory.vue"),
        // meta:{
        //   isLogin:true
        // }
      },
      {
        path: 'selfevalu',
        name: 'SelfEvalu',
        component: () =>import("../views/main/SelfEvalu.vue"),
        // meta:{
        //   isLogin:true
        // }
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
