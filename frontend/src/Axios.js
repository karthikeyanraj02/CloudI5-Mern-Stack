import Axios from "axios";

const instance = Axios.create({
  baseURL: "http://localhost:3050/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
