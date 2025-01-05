import axios from 'axios';
import Cookies from 'js-cookie';

// Set up the base URL for all API calls
const API_URL = 'http://localhost:5000/api'; // Adjust with your actual backend URL

// Create an axios instance with default settings
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Allow credentials (cookies) to be sent with requests
});

// Add an interceptor for requests
api.interceptors.request.use(
  (config) => {
    // Get the token from cookies
    const token = Cookies.get('auth_token'); // Ensure the token name matches what you set in cookies
    if (token) {
      // Add token to Authorization header if available
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error.message || error);
    return Promise.reject(error);
  }
);

// Add an interceptor for responses
api.interceptors.response.use(
  (response) => response, // Return the response directly if successful
  (error) => {
    // Handle response errors
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized access (e.g., token expired or invalid)
        console.error('Unauthorized, please log in again.');
        Cookies.remove('auth_token'); // Remove the expired or invalid token

        // Optionally redirect to login page
        if (window.location.pathname !== '/login-signup') {
          window.location.href = '/login-signup'; // Ensure the redirection avoids an infinite loop
        }
      } else {
        console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
      }
    } else {
      console.error('Network or server error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
