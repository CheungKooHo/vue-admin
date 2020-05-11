import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/index.js";
import MyHttpServer from "@/plugin/http.js";

// 引入基本初始样式
import "@/assets/css/base.css";
// 引入主题更换样式
import "@/assets/scss/theme.scss";

// 引入插件
Vue.use(ElementUI);
Vue.use(MyHttpServer);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
