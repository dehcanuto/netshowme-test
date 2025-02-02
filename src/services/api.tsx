import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_API_URL || 'http://localhost:3000',
});

api.interceptors.request.use(
  (response) => response,
  (error) => {
    Promise.reject(error)
    return error;
  }
)

export default api;