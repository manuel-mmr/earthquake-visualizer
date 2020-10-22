import Vue from "vue";
import Vuex from "vuex";
import earthquakeApi from "@/gateways/earthquakeApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    earthquakesData: [],
    earthquakeDetail: null,
    loading: true
  },
  actions: {
    getEarthquakesData({ commit }, { dateFrom, dateTo }) {
      commit("resetEarthquakeData");
      commit("changeLoadingState", true);
      earthquakeApi
        .getEarthquakes(dateFrom, dateTo)
        .get()
        .then(response => {
          const { features } = response.data;
          features.forEach(element => {
            const data = {
              id: element.id,
              location: element.properties.place,
              coordinates: [
                element.geometry.coordinates[0],
                element.geometry.coordinates[1]
              ]
            };
            commit("setEarthquakeData", data);
            commit("changeLoadingState", false);
          });
        });
    },
    getEarthquakeDetail({ commit }, { id }) {
      commit("changeLoadingState", true);
      earthquakeApi
        .getEarthquakeDetails(id)
        .get()
        .then(response => {
          commit("setEarthquakeDetail", response.data);
          commit("changeLoadingState", false);
        });
    }
  },
  mutations: {
    setEarthquakeData(state, data) {
      state.earthquakesData.push(data);
    },
    resetEarthquakeData(state) {
      state.earthquakesData = [];
    },
    setEarthquakeDetail(state, data) {
      state.earthquakeDetail = data;
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    }
  },
  getters: {
    getEarthquakeId: state => state.earthquakeDetail.id,
    getEarthquakeLocation: state => state.earthquakeDetail.properties.place,
    getEarthquakeTitle: state => state.earthquakeDetail.properties.title,
    getEarthquakeDate: state => state.earthquakeDetail.properties.time,
    getEarthquakeType: state => state.earthquakeDetail.properties.type,
    getEarthquakeMagnitude: state => state.earthquakeDetail.properties.mag,
    getEarthquakeState: state => state.earthquakeDetail.properties.status
  }
});
