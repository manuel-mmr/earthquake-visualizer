<template>
  <div class="breadcrumb-container">
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        @click="goTo(index)"
        :class="{ linked: !!breadcrumb.link }"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: this.$route.meta.breadcrumb
    };
  },
  methods: {
    goTo(index) {
      if (this.breadcrumbList[index].link)
        this.$router.push(this.breadcrumbList[index].link);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.breadcrumb-container {
  display: flex;
  text-align: left;
  list-style: none;
  padding-bottom: 25px;
}

ul {
  margin: 0;
  padding: 0;
}

ul > li {
  @extend %font--normal-light;
  align-items: center;
  cursor: default;
  display: flex;
  float: left;
}

ul > li:not(:last-child)::after {
  content: "/";
  float: right;
  margin: 0 10px;
}

.linked {
  @extend %font--normal;
  color: $lightblue-color;
  cursor: pointer;
}
</style>
