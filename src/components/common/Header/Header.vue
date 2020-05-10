<template>
  <div class="header">
    <div class="logo">
      <el-image :src="src"></el-image>
    </div>
    <h2 class="title">ADMIN_SYSTEM</h2>
    <div class="user_info">
      <!-- <theme-pick class="theme_pick"></theme-pick> -->
      <el-select
        class="theme_bar"
        v-model="currentTheme"
        placeholder="修改主题"
        @change="changeTheme"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="msg">
        <el-badge :value="2" class="item">
          <i class="el-icon-message-solid"></i>
        </el-badge>
      </div>
      <div class="login_bar">
        <el-image :src="src"></el-image>
        <span>admin</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      options: [
        { value: "blueTheme", label: "蓝色主题" },
        { value: "blackTheme", label: "黑色主题" },
        { value: "redTheme", label: "红色主题" },
      ],
      currentTheme: "",
    };
  },
  methods: {
    changeTheme() {
      document.querySelector("body").className = this.currentTheme;
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 0;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 65px;
    width: 300px;
    img {
      width: 65px;
      height: 65px;
    }
  }

  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 65px;
  }

  .user_info {
    width: 300px;
    display: flex;
    align-items: center;
    color: #fff;
    .theme_bar {
      width: 105px;
      margin-right: 10px;
    }
    .msg {
      margin-right: 18px;
      font-size: 22px;
    }
    .login_bar {
      display: flex;
      align-items: center;
      margin-right: 18px;
      img {
        width: 36px;
        height: 36px;
        margin-right: 18px;
        border-radius: 50%;
      }
    }
  }
}
</style>
