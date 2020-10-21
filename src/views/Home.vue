<template>
  <div class="container">
    <h1>Earthquakes Visualizer</h1>
    <!-- DATEPICKER -->
    <div class="datepicker-container">
      <b-form-datepicker
        class="datepicker-from"
        :max="dateTo"
        placeholder="From"
        id="datepicker-from"
        v-model="dateFrom"
      ></b-form-datepicker>

      <b-form-datepicker
        class="datepicker-to"
        :min="dateFrom"
        placeholder="To"
        id="datepicker-to"
        v-model="dateTo"
      ></b-form-datepicker>

    </div>

    <!-- MAP -->
    <div class="map-container">
      <MglMap
        :mapStyle="mapStyle"
        :center="coordinates"
      >
        <MglMarker
          v-for="earthquakes in earthquakesData" :key="earthquakes.id"
          :coordinates="earthquakes.coordinates">
          <MglPopup>
            <div>
              <div class="popup-text-container">
                <div>Id: {{earthquakes.id}}</div>
                <div>Location: {{earthquakes.location}}</div>
              </div>
              <b-button variant="outline-primary" v-on:click="goToDetailScreen">See details</b-button>
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import earthquakeApi from "@/gateways/earthquakeApi";
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglPopup,
    MglMarker
  },
  name: "Home",
  data() {
    return {
      earthquakesData: [],
      dateFrom: "",
      dateTo: "",
      mapStyle: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      coordinates: [-3.74922, 40.463667],
    };
  },
  methods: {
    goToDetailScreen: function() {
      // TODO: Implement logic
    }
  },
  mounted() {
    earthquakeApi.get().then(response => {
      const {features} = response.data;
      features.forEach(element => {
        this.earthquakesData.push({
          id: element.id,
          location: element.properties.place,
          coordinates: [element.geometry.coordinates[0], element.geometry.coordinates[1]]
        });
      });
    });
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-flow: column;
  padding: 20px;
  height: 100%;
}

.datepicker-container {
  display: flex;
  flex-direction: column;
}

.datepicker-to {
  margin-top: 20px;
}

.map-container {
  height: 100%;
  margin-top: 20px;
  min-height: 350px;
  position: relative;
}

.popup-text-container {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
  text-align: left;
}

@media only screen and (min-width: 576px) {
  .datepicker-container {
    flex-direction: row;
  }

  .datepicker-to {
    margin-top: 0;
  }

  .datepicker-from {
    margin-right: 20px;
  }
}
</style>
