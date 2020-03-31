import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// if ((process.env.NODE_ENV = "development")) {
//   console.log(process.env.BASE_URL); //http://localhost:3000/
// } else {
//   console.log(process.env.BASE_URL); //url
// }
