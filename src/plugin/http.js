import axios from "axios";

const MyHttpServer = {};

MyHttpServer.install = Vue => {
  // 4. 添加实例方法
  axios.defaults.baseURL =
    " https://easy-mock.com/mock/5e844a94c04a3a2346108bc0/admin";
  Vue.prototype.$http = axios;
};

export default MyHttpServer;
