import axios, { AxiosRequestConfig } from "axios";

interface Config extends AxiosRequestConfig {}

const API = () => {
  const baseConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };

  const instance = axios.create(baseConfig);

  instance.interceptors.request.use((config: Config) => {
    return config;
  });

  return instance;
};

export default API();
