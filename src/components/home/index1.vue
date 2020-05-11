<template>
  <div class="index1">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>首页1</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片模块 -->
    <div class="cardWarp">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>最近更新</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>动态</span>
              </div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
              <div>2</div>
            </el-card>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>快速导航</span>
              </div>
              <div>3333</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>新闻动态</span>
              </div>
              <div>4</div>
              <div>4</div>
              <div>4</div>
              <div>4</div>
              <div>4</div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>重点组件</span>
              </div>
              <div>5</div>
              <div>5</div>
              <div>5</div>
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

<style lang='scss'>
</style>