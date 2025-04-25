// src/apis/setupAxiosInterceptors.js
import axios from 'axios';
import requestRefreshToken from './requestAccessTokenInceptor';


const setupAxiosInterceptors = () => {
  // Request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          return await requestRefreshToken(originalRequest);
        } catch (err) {
          localStorage.clear();
          window.location.href = '/login';
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptors;
