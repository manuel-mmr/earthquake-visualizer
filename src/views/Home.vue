<template>
  <div class="app-container">
    <DateSelector
      :dateFrom="dateFrom"
      :dateTo="dateTo"
      @date-selection="updateDate"
    />

    <Spinner v-if="$store.state.loading" />

    <Map v-else>
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

const DETAIL_ROUTE = "/detail/";

const DEFAULT_DATE = {
  FROM: "2017-10-01",
  TO: "2017-10-02"
};

export default {
  components: {
    DateSelector,
    Map,
    Spinner
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
  methods: {
    goToDetailScreen: function(id) {
      this.$router.push(DETAIL_ROUTE + id);
    },
    updateDate: function(dateFrom, dateTo) {
      this.dateFrom = dateFrom;
      this.dateTo = dateTo;
      this.$store.dispatch("getEarthquakesData", { dateFrom, dateTo });
    }
  }
};
</script>

<style scoped lang="scss">
.popup-location {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 25px;
  text-align: left;
}

.popup-id {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
}

.button-container {
  text-align: center;
}
</style>
