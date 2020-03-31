<template>
  <div id="app">
    <div class="layout">
      <Aside></Aside>
    </div>
  </div>
</template>

<script>
import Aside from "./views/components/Aside";
export default {
  name: "app",
  components: {
    Aside
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
