import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login/login.vue";
import Home from "@/components/home/home.vue";
import Index from "@/components/index/index.vue";
import Supply from "@/components/supply/supply.vue";
import Goods from "@/components/goods/goods.vue";
import Contacts from "@/components/contacts/contacts.vue";
import Personal from "@/components/personal/personal.vue";

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
        {
          name: "supply",
          path: "/supply",
          component: Supply,
        },
        {
          name: "goods",
          path: "/goods",
          component: Goods,
        },
        {
          name: "contacts",
          path: "/contacts",
          component: Contacts,
        },
        {
          name: "personal",
          path: "/personal",
          component: Personal,
        },
      ],
    },
  ],
});
