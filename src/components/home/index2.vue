<template>
  <div class="index2">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>首页2</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片模块 -->
    <div class="cardWarp">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>访问量</span>
            </div>
            <div>9,999,999</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>下载</span>
            </div>
            <div>35,333</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>收入</span>
            </div>
            <div>333,123</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>活跃用户</span>
            </div>
            <div>66,666</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>访问量</span>
          </div>
          <div>9,999,999</div>
        </el-card>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>用户留言</span>
            </div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
            <div>66,666</div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>本周活跃用户</span>
                </div>
                <div>66,666</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>项目进展</span>
                </div>
                <div>66,666</div>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>用户全国分布</span>
              </div>
              <div>66,666</div>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>