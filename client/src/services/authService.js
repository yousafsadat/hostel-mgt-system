import axios from 'axios';
import Cookies from 'js-cookie';

// Set up the base URL for your backend
const API_URL = 'http://localhost:5000/api/auth';

// Get a cookie value by name using js-cookie
export const getCookie = (name) => {
  return Cookies.get(name); // Simplified to use js-cookie
};

// Login function in authService.js
export const login = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/login`, payload);
    const { token } = response.data;
    // Use js-cookie to set the token in cookies
    Cookies.set('auth_token', token, { path: '/', secure: true, sameSite: 'Strict' });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
  }
};

// Signup function in authService.js
export const signup = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/register`, payload);
    const { token } = response.data;
    // Use js-cookie to set the token in cookies
    Cookies.set('auth_token', token, { path: '/', secure: true, sameSite: 'Strict' });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Signup failed. Please try again.');
  }
};

// Check if the user is authenticated
export const checkAuth = async () => {
  const token = getCookie('auth_token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Authentication check failed:', error.response?.data?.message || error.message);
    return null;
  }
};

// Logout function to clear the token
export const logout = async () => {
  try {
    // Send request to logout endpoint
    await axios.post(`${API_URL}/logout`);
    
    // Clear the auth_token from the cookies manually
    Cookies.remove('auth_token', { path: '/' }); // Use js-cookie to remove the token
  } catch (error) {
    console.error('Logout failed:', error.response?.data?.message || error.message);
  }
};

// Get user information function
export const getUserInfo = async () => {
  const token = getCookie('auth_token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to get user info:', error.response?.data?.message || error.message);
    return null;
  }
};
