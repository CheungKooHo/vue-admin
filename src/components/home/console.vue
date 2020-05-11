<template>
  <div class="console">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>快捷方式</span>
            <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>版本信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数据概览</span>
            <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
          </div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>效果报告</span>
                <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
              </div>
              <div>1234</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>实时监控</span>
                <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
              </div>
              <div>1234</div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>INFO</span>
            <el-button style="float: right; padding: 3px 0" type="text" disabled>操作按钮</el-button>
          </div>
          <div>1234</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.box-card {
  margin-top: 20px;
}
</style>
