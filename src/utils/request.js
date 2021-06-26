import axios from "axios";

const baseUrl = "https://myits-server.herokuapp.com/api/v1";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response.status;
    if (status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export { instance as request };
