<template>
  <div class="aside">
    <el-radio-group v-model="isCollapse">
      <el-radio-button
        @click.native.prevent="btnOpen"
        class="ben_aside_open"
        v-if="!isOpen"
        :label="isOpen"
      >
        <i class="el-icon-s-unfold"></i>
      </el-radio-button>
      <el-radio-button
        @click.native.prevent="btnClose"
        class="btn_aside_close"
        v-if="isOpen"
        :label="isOpen"
      >
        <i class="el-icon-s-fold"></i>
      </el-radio-button>
    </el-radio-group>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
      :unique-opened="true"
      :collapse-transition="false"
    >
      <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="supply">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">供应链管理</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项a</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="goods">
        <i class="el-icon-setting"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="contacts">
        <i class="el-icon-document"></i>
        <span slot="title">联系人管理</span>
      </el-menu-item>
      <el-menu-item index="personal">
        <i class="el-icon-setting"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      isOpen: false,
    };
  },
  methods: {
    btnOpen() {
      console.log("open");
      this.isOpen = true;
      this.isCollapse = false;
    },
    btnClose() {
      console.log("close");
      this.isOpen = false;
      this.isCollapse = true;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.aside {
  height: 100%;
  .el-radio-button__inner {
    background-color: #c6e2ff;
  }
  .btn_aside_close {
    width: 200px;
    .el-icon-s-fold {
      font-size: 18px;
      width: 159px;
    }
  }
  .ben_aside_open {
    width: 64px;
    .el-icon-s-unfold {
      width: 23px;
      font-size: 18px;
    }
  }
  ul {
    background-color: #c6e2ff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
