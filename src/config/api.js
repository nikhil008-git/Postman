const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5002/api'
  : '/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('adminToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error occurred' }));
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const ENDPOINTS = {
  SPEAKERS: `${API_BASE_URL}/speakers`,
  SPONSORS: `${API_BASE_URL}/sponsors`,
  EMAIL: `${API_BASE_URL}/email`,
  EVENTS: `${API_BASE_URL}/events`,
  ADMIN_EVENTS: `${API_BASE_URL}/admin/events`,
  ADMIN_REGISTRATIONS: `${API_BASE_URL}/admin/registrations`,
  ADMIN_AUTH: `${API_BASE_URL}/admin/auth`
};

export const eventAPI = {
  getAllEvents: async () => {
    try {
      const response = await fetch(ENDPOINTS.EVENTS);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  },

  getEventById: async (id) => {
    try {
      const response = await fetch(`${ENDPOINTS.EVENTS}/${id}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching event:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  },

  createEvent: async (formData) => {
    try {
      const response = await fetch(ENDPOINTS.ADMIN_EVENTS, {
        method: 'POST',
        headers: getAuthHeader(),
        body: formData
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error creating event:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  },

  updateEvent: async (id, formData) => {
    try {
      const response = await fetch(`${ENDPOINTS.ADMIN_EVENTS}/${id}`, {
        method: 'PUT',
        headers: getAuthHeader(),
        body: formData
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error updating event:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  },

  deleteEvent: async (id) => {
    try {
      const response = await fetch(`${ENDPOINTS.ADMIN_EVENTS}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeader()
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  }
};

export const registrationAPI = {
  getRegistrations: async () => {
    const response = await fetch(ENDPOINTS.ADMIN_REGISTRATIONS, {
      headers: getAuthHeader()
    });
    if (!response.ok) throw new Error('Failed to fetch registrations');
    return response.json();
  }
};

export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${ENDPOINTS.ADMIN_AUTH}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Failed to connect to the server. Please check if the backend is running.');
    }
  }
};

export default {
  API_BASE_URL,
  ENDPOINTS,
  eventAPI,
  registrationAPI,
  authAPI
}; 