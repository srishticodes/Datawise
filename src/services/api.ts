import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const getActivities = () => {
  return axios.get(`${API_URL}/activities`);
};

export const addFeedback = (feedback: { name: string; email: string; message: string }) => {
  return axios.post(`${API_URL}/feedback`, feedback);
}; 