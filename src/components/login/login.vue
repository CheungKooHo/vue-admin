<template>
  <div class="login-wrap">
    <!-- login表单 -->
    <el-form class="login-from" label-position="top" label-width="80px" :model="formData">
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
      // login 表单要传送的数据
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 实现异步登录
    async loginHendle() {
      const { data: res } = await this.$http.post("login", this.formData);
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
