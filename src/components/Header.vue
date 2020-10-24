<template>
  <div class="header-container">
    <h1 class="title">Earthquakes Visualizer</h1>
    <Search v-if="showSearch" @on-search="onSearch" />
  </div>
</template>

<script>
import Search from "./Search";

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
  flex: 1;
  margin: auto;
}
</style>
