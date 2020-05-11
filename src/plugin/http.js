import axios from "axios";

const MyHttpServer = {};

MyHttpServer.install = (Vue) => {
  // 设置请求基本地址
  axios.defaults.baseURL = "http://rap2.taobao.org:38080/app/mock/249487";

  // 配置请求方法为 $http
  Vue.prototype.$http = axios;
};

export default MyHttpServer;
