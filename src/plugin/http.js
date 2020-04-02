import axios from "axios";

const MyHttpServer = {};

MyHttpServer.install = Vue => {
  // 4. 添加实例方法
  axios.defaults.baseURL = "http://rap2.taobao.org:38080/app/mock/249487";
  Vue.prototype.$http = axios;
};

export default MyHttpServer;
