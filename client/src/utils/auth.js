// utils/auth.js
export const getAuthToken = () => {
    const token = document.cookie.split('; ').find(cookie => cookie.startsWith('auth_token='));
    return token ? token.split('=')[1] : null;
  };
  
  