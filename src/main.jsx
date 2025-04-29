
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import setupAxiosInterceptors from '~/apis/axiosInterceptor.js';
setupAxiosInterceptors();
createRoot(document.getElementById('root')).render(
  <App />
)
