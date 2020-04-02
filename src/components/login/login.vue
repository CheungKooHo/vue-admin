<template>
  <div class="login-wrap">
    <el-form
      class="login-from"
      label-position="top"
      label-width="80px"
      :model="formData"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="loginHendle()" type="success">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async loginHendle() {
      // this.$http.post("login", this.formData).then(res => {
      //   console.log(res);

      //   const {
      //     data,
      //     meta: { msg, status }
      //   } = res.data;

      //   if (status === 200) {
      //     // 1.成功跳转页面，提示成功
      //     this.$message.success(data.username + "，欢迎回家！");
      //     this.$router.push({ name: "home" });
      //   } else {
      //     // 2.失败提示信息
      //     this.$message.error("用户名不存在！");
      //   }
      // });
      const res = await this.$http.post("login", this.formData);
      // console.log(res);
      const {
        data,
        meta: { msg, status }
      } = res.data;

      if (status === 200) {
        // 成功
        // 0.保存token
        localStorage.setItem("token", data.token);
        // 1.跳转页面
        this.$router.push({ name: "home" });
        // 2.提示成功
        this.$message.success(data.username + "，欢迎回家！");
      } else {
        // 失败提示信息
        this.$message.error("用户名不存在！");
      }
    }
  }
};
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-from {
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
}
</style>
