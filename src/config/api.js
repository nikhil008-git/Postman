const isDevelopment = import.meta.env.MODE === 'development';

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5002/api'
  : 'https://postman-backend-six.vercel.app/api';

export const ENDPOINTS = {
  SPEAKERS: `${API_BASE_URL}/speakers`,
  SPONSORS: `${API_BASE_URL}/sponsors`,
  EMAIL: `${API_BASE_URL}/email`,
  EVENTS: `${API_BASE_URL}/events`,
  // Add other endpoints here
};

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

// Add helper functions for event operations
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
  }
};

export default {
  API_BASE_URL,
  ENDPOINTS,
  eventAPI,
}; 