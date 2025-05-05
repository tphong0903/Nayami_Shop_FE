import axios from 'axios';
const refreshAxios = axios.create();
const getNewAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    const res = await refreshAxios.post(`${import.meta.env.VITE_API_BASE_URL}/api/refresh`, null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    const newAccessToken = res.data.data;
    return newAccessToken;
  } catch (err) {
    console.error('❌ Error refreshing token:', err);
    throw err;
  }
}
// Add a request interceptor
const requestRefreshToken = async (beforeRequest) => {
  try {
    const newAccessToken = await getNewAccessToken();
    if (newAccessToken) {
      localStorage.setItem('access_token', newAccessToken);
      if (newAccessToken) {
        beforeRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(beforeRequest);
      }
    }
    return newAccessToken;
  } catch (err) {
    console.error('❌ Failed to resend original request:', err);
    throw err;
  }
};

export default requestRefreshToken;


