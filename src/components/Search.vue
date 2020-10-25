<template>
  <div>
    <input
      v-model="search"
      class="form-control search"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
</template>

<script>
const DEBOUNCE_TIME = 600;

export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search: function(value) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.$emit("on-search", value);
      }, DEBOUNCE_TIME);
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  display: inline-block;
  width: 200px;
}
</style>
