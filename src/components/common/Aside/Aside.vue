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
      <el-submenu v-for="item in menuList" :key="item.id" :index="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.name}}</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      isOpen: false,
      // menuList侧边栏菜单数据
      menuList: [
        {
          name: "菜单1",
          id: "1",
          path: "1",
          children: [
          ]
        },
        {
          name: "菜单2",
          id: "2",
          path: "2",
          children: [
            { name: "菜单2-1", id: "21", path: "21" }
          ]
        },
        {
          name: "菜单3",
          id: "3",
          path: "3",
          children: [
            { name: "菜单3-1", id: "31", path: "31" },
            { name: "菜单3-2", id: "32", path: "32" }
          ]
        },
        {
          name: "菜单4",
          id: "4",
          path: "4",
          children: [
            { name: "菜单4-1", id: "4", path: "41" }
          ]
        },
        {
          name: "菜单5",
          id: "5",
          path: "5",
          children: [
            { name: "菜单5-1", id: "51", path: "51" }
          ]
        }
      ]
    };
  },
  methods: {
    // 菜单折叠展开按钮的方法
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
    // 某一级菜单展开折叠调用的方法
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
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
