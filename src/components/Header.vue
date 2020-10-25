<template>
  <div class="header-container">
    <h1 class="title" @click="goToHome()">Earthquakes Visualizer</h1>
    <Search v-if="showSearch" @on-search="onSearch" />
  </div>
</template>

<script>
import Search from "./Search";

const HOME_ROUTE = "/";

export default {
  name: "Header",
  components: {
    Search
  },
  props: {
    showSearch: Boolean
  },
  methods: {
    onSearch: function(value) {
      this.$emit("on-search", value);
    },
    goToHome: function() {
      if (this.$route.path != HOME_ROUTE) this.$router.push(HOME_ROUTE);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.header-container {
  background-color: $grey-color;
  color: $white-color;
  display: flex;
  height: 68px;
  left: 0;
  padding: 15px 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1030;
}

.title {
  @extend %font--large;
  cursor: pointer;
  flex: 1;
  margin: auto;
}
</style>
