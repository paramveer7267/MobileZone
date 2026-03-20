import axios from "axios";

const api = axios.create({
  baseURL: "https://7ersrenxi6.execute-api.ap-southeast-2.amazonaws.com",
});

export default api;
