<template>
  <div class="Index">
    <el-container class="container">
      <!-- header头部区 -->
      <el-header height="65px" class="header">
        <Header @handleSignout="handleSignout"></Header>
      </el-header>
      <!-- 主要区域 -->
      <el-container class="warp">
        <!-- 侧边栏区域 -->
        <el-aside class="aside" width="auto">
          <Aside></Aside>
        </el-aside>
        <!-- 右侧内容区 -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/common/Header/Header.vue";
import Aside from "@/components/common/Aside/Aside.vue";

export default {
  name: "Index",
  components: {
    Header,
    Aside
  },

  beforeCreate() {
    // 页面加载前判断是否存在登录token，如果没有返回登录
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    } else {
    }
  },
  methods: {
    // 登录退出的方法，监听子组件传值实现
    handleSignout() {
      localStorage.clear();
      this.$message.success("记得回来哦！");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss">
.header {
  padding: 0;
  width: 100%;
  height: 65px;
  background-color: #409eff;
}
.Index {
  height: 100%;
  .container {
    height: 100%;
  }
}
.warp {
  height: 100%;
  margin-top: 65px;
  background-color: #ecf5ff;

  .aside {
    height: 100%;
    background-color: #c6e2ff;
  }

  .main {
    background-color: #ecf5ff;
  }
}
</style>
