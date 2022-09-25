import axios from "axios";

const axiosApi = axios.create({
  baseURL: "./api", //omitindo a url ele pega ela como default
});

export default axiosApi;
