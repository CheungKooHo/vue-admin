import { get, post } from "./request";

//登陆
export const login = login => post("/api/post/user/login", login);
//上传
export const upload = upload => get("/api/get/upload", upload);

import { login } from "@/api/api.js"; //引入login

/**
 * @oarma {Object} login 接口传递的参数
 */
login(login)
  .then(res => {
    //成功之后要做的事情
  })
  .catch(err => {
    //出错时要做的事情
  });
