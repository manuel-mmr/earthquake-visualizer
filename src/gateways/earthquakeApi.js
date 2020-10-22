import axios from "axios";

export default {
  getEarthquakes(dateFrom, dateTo) {
    return axios.create({
      baseURL: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${dateFrom}&endtime=${dateTo}`,
      timeout: 5000
    });
  },
  getEarthquakeDetails(id) {
    return axios.create({
      baseURL: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`,
      timeout: 5000
    });
  }
};
