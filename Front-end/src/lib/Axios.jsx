import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5050/api/' // Your local dev server
    : 'https://your-production-api.com/api'; // Replace with your actual prod URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // If you're using cookies/auth sessions
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
