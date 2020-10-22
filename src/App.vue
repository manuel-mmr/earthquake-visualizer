<template>
  <div class="app">
    <h1 class="title">Earthquakes Visualizer</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/bootstrap-vue/src/index.scss";

html,
body {
  height: 100%;
  margin: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  padding: 20px;
  height: 100%;
}

.app-container {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.title {
  margin-bottom: 20px;
  text-align: center;
}
</style>
