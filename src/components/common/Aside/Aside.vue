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
          <i class="el-icon-s-tools"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">{{subItem.name}}</span>
          </template>
        </el-menu-item>
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
          name: "首页",
          id: "1",
          path: "/index",
          children: [
            {
              name: "控制台",
              id: "11",
              path: "/console"
            },
            {
              name: "主页1",
              id: "12",
              path: "index1"
            },
            {
              name: "主页2",
              id: "13",
              path: "index2"
            }
          ]
        },
        {
          name: "组件",
          id: "2",
          path: "module",
          children: [
            { name: "栅格", id: "21", path: "21" },
            { name: "按钮", id: "22", path: "22" },
            { name: "表单", id: "23", path: "23" },
            { name: "导航", id: "24", path: "24" },
            { name: "选项卡", id: "25", path: "25" }
          ]
        },
        {
          name: "页面",
          id: "3",
          path: "pages",
          children: [
            { name: "个人主页", id: "31", path: "31" },
            { name: "客户列表", id: "32", path: "32" },
            { name: "商品列表", id: "33", path: "33" },
            { name: "留言板", id: "34", path: "34" },
            { name: "搜索结果", id: "35", path: "35" },
            { name: "注册", id: "36", path: "36" },
            { name: "登录", id: "37", path: "37" },
            { name: "忘记密码", id: "38", path: "38" },
            { name: "404", id: "39", path: "39" }
          ]
        },
        {
          name: "应用",
          id: "4",
          path: "application",
          children: [
            { name: "文章列表", id: "41", path: "41" },
            { name: "分类管理", id: "42", path: "42" }
          ]
        },
        {
          name: "Echarts集成",
          id: "5",
          path: "advanced",
          children: [
            { name: "折线图", id: "51", path: "51" },
            { name: "柱状图", id: "52", path: "52" },
            { name: "地图", id: "53", path: "53" }
          ]
        },
        {
          name: "用户",
          id: "6",
          path: "user",
          children: [
            { name: "网站用户", id: "61", path: "61" },
            { name: "后台管理员", id: "62", path: "62" },
            { name: "角色管理", id: "63", path: "63" }
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
