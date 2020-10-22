<template>
  <div class="map-container">
    <MglMap :mapStyle="mapStyle" :center="coordinates">
      <MglMarker
        v-for="earthquakes in earthquakesData"
        :key="earthquakes.id"
        :coordinates="earthquakes.coordinates"
      >
        <MglPopup>
          <div>
            <slot :id="earthquakes.id" :location="earthquakes.location"></slot>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";

export default {
  name: "Map",
  components: {
    MglMap,
    MglPopup,
    MglMarker
  },
  data() {
    return {
      earthquakesData: [],
      mapStyle: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      coordinates: [-3.74922, 40.463667]
    };
  },
  mounted() {
    this.earthquakesData = this.$store.state.earthquakesData;
  }
};
</script>

<style scoped lang="scss">
.map-container {
  height: 100%;
  margin-top: 20px;
  min-height: 350px;
  position: relative;
}
</style>
