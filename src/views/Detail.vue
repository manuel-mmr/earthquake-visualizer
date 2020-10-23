<template>
  <div class="app-container">
    <Header :showSearch="false" />
    <Spinner v-if="$store.state.loading" />
    <b-list-group v-else>
      <b-list-group-item>Earthquake ID: {{ id }}</b-list-group-item>
      <b-list-group-item>Location: {{ location }}</b-list-group-item>
      <b-list-group-item>Title: {{ title }}</b-list-group-item>
      <b-list-group-item>Date: {{ date }}</b-list-group-item>
      <b-list-group-item>Type: {{ type }}</b-list-group-item>
      <b-list-group-item>Magnitude: {{ magnitude }}</b-list-group-item>
      <b-list-group-item>State: {{ state }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Detail",
  components: {
    Header,
    Spinner
  },
  created() {
    this.$store.dispatch("getEarthquakeDetail", {
      id: this.$route.params.id
    });
  },
  computed: {
    ...mapGetters({
      id: "getEarthquakeId",
      location: "getEarthquakeLocation",
      title: "getEarthquakeTitle",
      date: "getEarthquakeDate",
      type: "getEarthquakeType",
      magnitude: "getEarthquakeMagnitude",
      state: "getEarthquakeState"
    })
  }
};
</script>
