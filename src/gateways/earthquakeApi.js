import axios from "axios";

export default axios.create({
  baseURL: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2017-10-01&endtime=2017-10-02",
  timeout: 5000
});
