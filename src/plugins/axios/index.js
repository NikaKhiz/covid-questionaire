import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
};

export default axios.create(defaultOptions);
