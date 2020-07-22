import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-45993.firebaseio.com/",
});

export default instance;
