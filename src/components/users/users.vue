<template>
  <el-card class="box-crad">
    <!-- 1.面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2.搜索 -->
    <el-row class="search-row">
      <el-col>
        <el-input class="input-search" placeholder="请输入内容" v-model="query">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 3.列表 -->

    <!-- 4.分页 -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  }
};
</script>

<style>
.box-crad {
  height: 100%;
}
.input-search {
  width: 80%;
}
</style>