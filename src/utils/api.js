import axios from "axios";

const api = axios.create({
  baseURL: "http://3.105.207.46:5000",
});

export default api;
