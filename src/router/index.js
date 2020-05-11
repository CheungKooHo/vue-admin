import Vue from "vue";
import Router from "vue-router";
// login组件
import Login from "@/components/login/login.vue";
// index内组件
import Index from "@/components/index/index.vue";
import Console from "@/components/home/console.vue";
import Index1 from "@/components/home/index1.vue";
import Index2 from "@/components/home/index2.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "index",
      path: "/",
      redirect: "console",
      component: Index,
      children: [
        {
          name: "console",
          path: "/console",
          component: Console,
        },
        {
          name: "index1",
          path: "/index1",
          component: Index1,
        },
        {
          name: "index2",
          path: "/index2",
          component: Index2,
        },
      ],
    },
  ],
});
