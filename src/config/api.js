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

// Maintain ENDPOINTS for backward compatibility
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
      const response = await fetch(ENDPOINTS.EVENTS, {
        method: 'GET',
        credentials: 'include',
        headers: defaultHeaders,
      });
      if (!response.ok) throw new Error('Failed to fetch events');
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },
  
  getEventById: async (eventId) => {
    if (!eventId) {
      throw new Error('Event ID is required');
    }
    try {
      const response = await fetch(`${ENDPOINTS.EVENTS}/${eventId}`, {
        method: 'GET',
        credentials: 'include',
        headers: defaultHeaders,
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Event not found');
        }
        throw new Error('Failed to fetch event');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },
  
  createEvent: async (formData) => {
    try {
      const response = await fetch(`${ENDPOINTS.EVENTS}/create`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create event');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  updateEvent: async (id, formData) => {
    try {
      const response = await fetch(`${ENDPOINTS.EVENTS}/${id}`, {
        method: 'PUT',
        credentials: 'include',
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to update event');
      return await response.json();
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  deleteEvent: async (id) => {
    try {
      const response = await fetch(`${ENDPOINTS.EVENTS}/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: defaultHeaders,
      });
      if (!response.ok) throw new Error('Failed to delete event');
      return await response.json();
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
};

// Export default for backward compatibility
export default {
  API_BASE_URL,
  ENDPOINTS,
  eventAPI,
}; 