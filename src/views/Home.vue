<template>
  <div class="app-container">
    <Header :showSearch="true" @on-search="filterEarthquakes" />
    <DateSelector
      :dateFrom="dateFrom"
      :dateTo="dateTo"
      @date-selection="updateDate"
    />
    <Spinner v-if="$store.state.loading" />

    <Map v-else :data="earthquakesData">
      <template v-slot="earthquake">
        <div class="popup-id">{{ earthquake.id }}</div>
        <div class="popup-location">Location: {{ earthquake.location }}</div>
        <div class="button-container">
          <b-button
            variant="outline-primary"
            @click="goToDetailScreen(earthquake.id)"
          >
            See details
          </b-button>
        </div>
      </template>
    </Map>
  </div>
</template>
<script>
import DateSelector from "@/components/DateSelector.vue";
import Map from "@/components/Map.vue";
import Spinner from "@/components/Spinner.vue";
import Header from "@/components/Header.vue";

const DETAIL_ROUTE = "/detail/";

const DEFAULT_DATE = {
  FROM: "2017-10-01",
  TO: "2017-10-02"
};

export default {
  components: {
    DateSelector,
    Map,
    Spinner,
    Header
  },
  name: "Home",
  data() {
    return {
      dateFrom: DEFAULT_DATE.FROM,
      dateTo: DEFAULT_DATE.TO,
      loading: this.$store.state.loading
    };
  },
  created() {
    this.$store.dispatch("getEarthquakesData", {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    });
  },
  mounted() {
    this.earthquakesData = this.$store.getters.getEarthquakesData;
  },
  methods: {
    goToDetailScreen: function(id) {
      this.$router.push(DETAIL_ROUTE + id);
    },
    updateDate: function(dateFrom, dateTo) {
      this.dateFrom = dateFrom;
      this.dateTo = dateTo;
      this.$store.dispatch("getEarthquakesData", { dateFrom, dateTo });
    },
    filterEarthquakes: function(value) {
      this.$store.dispatch("updateSearch", { value });
      this.earthquakesData = this.$store.getters.getEarthquakesData;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.popup-location {
  @extend %font--small;
  margin-bottom: 25px;
  text-align: left;
}

.popup-id {
  @extend %font--normal;
  margin-bottom: 15px;
  text-align: center;
}

.button-container {
  text-align: center;
}
</style>
