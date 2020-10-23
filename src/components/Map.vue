<template>
  <div class="map-container">
    <MglMap :mapStyle="mapStyle" :center="center" :zoom.sync="zoom">
      <MglMarker
        @click="selectMaker(element)"
        v-for="element in data"
        :key="element.id"
        :coordinates="element.coordinates"
      >
        <MglPopup>
          <div>
            <slot :id="element.id" :location="element.location"></slot>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import { MglMap, MglPopup, MglMarker } from "vue-mapbox";

const DEFAULT_CERNTER = {
  LNG: -3.74922,
  LAT: 40.463667
};
const ZOOM_MARKER_SELECTION = 8;

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
      center: [DEFAULT_CERNTER.LNG, DEFAULT_CERNTER.LAT],
      zoom: 0
    };
  },
  props: {
    data: Array
  },
  mounted() {
    this.earthquakesData = this.$store.state.earthquakesData;
  },
  methods: {
    selectMaker: function(marker) {
      this.center = marker.coordinates;
      this.zoom = ZOOM_MARKER_SELECTION;
    }
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
