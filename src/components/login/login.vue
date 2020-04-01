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
    loginHendle() {
      this.$http.post("login", this.formData).then(res => {
        console.log(res);
      });
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
