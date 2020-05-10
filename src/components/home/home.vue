<template>
  <div class="home">
    <el-container class="container">
      <el-header height="65px" class="header">
        <Header></Header>
      </el-header>
      <el-container class="warp">
        <el-aside class="aside" width="auto">
          <Aside></Aside>
        </el-aside>
        <el-main class="main">
          <el-button type="primary">hahahahahah</el-button>
          this is main
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
  name: "Home",
  components: {
    Header,
    Aside,
  },

  beforeCreate() {
    const token = localStorage.getItem("token");

    if (!token) {
      this.$router.push({ name: "login" });
    } else {
    }
  },
  methods: {
    handleSignout() {
      localStorage.clear();
      this.$message.success("记得回来哦！");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 0;
  width: 100%;
  height: 65px;
  background-color: #409eff;
}
.home {
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
