const isDevelopment = import.meta.env.MODE === 'development';

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5002/api'
  : 'https://postman-backend-six.vercel.app/api';

export const ENDPOINTS = {
  SPEAKERS: `${API_BASE_URL}/speakers`,
  SPONSORS: `${API_BASE_URL}/sponsors`,
  EMAIL: `${API_BASE_URL}/email`,
  // Add other endpoints here
};

export default {
  API_BASE_URL,
  ENDPOINTS,
}; 