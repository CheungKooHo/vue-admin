import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login/login.vue";
import Home from "@/components/home/home.vue";
import Index from "@/components/index/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "home",
      path: "/",
      component: Home,
      children: [
        {
          name: "index",
          path: "/index",
          component: Index,
        },
      ],
    },
  ],
});
