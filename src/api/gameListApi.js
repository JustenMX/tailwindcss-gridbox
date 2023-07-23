import axios from "axios";

const gameListAPI = axios.create({
  baseURL: "https://api.rawg.io/api",
  timeout: 8000,
});

export default gameListAPI;
