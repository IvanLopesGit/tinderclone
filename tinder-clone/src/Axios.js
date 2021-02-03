import axios from "axios";

const instance = axios.create({
  baseURL: "https://itinder-backend.herokuapp.com/",
});

export default instance;
