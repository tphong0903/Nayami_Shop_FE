import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import requestRefreshToken from '~/apis/requestAccessTokenInceptor.js';

const callApi = (token,url) => {
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  axios.post(url,{},{headers:headers})
    .then(res => {
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
}
//request
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('request through inceptor');
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
//response
axios.interceptors.response.use(
  (response) => {
    console.log('Response inceptor');
    console.log(response);
    return response;
  },
  async (error) => {
    console.log('Response inceptor');
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      const res = await requestRefreshToken(originalRequest);
      console.log(res);
      return res;
    }else{
      console.log(error)
    }
  }
)

const setupAxiosInterceptors = () => {};
export default setupAxiosInterceptors;
