<template>
  <div class="app-container">
    <Header :showSearch="false" />
    <Breadcrumb />
    <div class="error-title">
      There was an error, please try again later.
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
export default {
  name: "Error",
  components: {
    Breadcrumb,
    Header
  }
};
</script>
<style scoped lang="scss">
@import "../scss/_variables.scss";

.error-title {
  @extend %font--extra-large;
  text-align: center;
}
</style>
