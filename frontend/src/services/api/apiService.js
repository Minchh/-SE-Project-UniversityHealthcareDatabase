import axios from "axios";

const API_URL = "http://localhost:5001"; // Base URL for your backend API

export const registerUser = async (email, password) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};

export const loginUser = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export const loginGoogle = async () => {
  return await axios.post(`${API_URL}/request`);
};

// Save Profile Information
export const saveProfile = async (profileData) => {
  return await axios.post(`${API_URL}/saveProfile`, profileData);
};

// Change Password
export const changePassword = async (email, currentPassword, newPassword, confirmPassword) => {
  return await axios.post(`${API_URL}/changePassword`, { email, currentPassword, newPassword, confirmPassword });
};

// Save Health Details
export const saveHealthDetails = async (healthData) => {
  return await axios.post(`${API_URL}/saveHealthDetails`, healthData);
};

// Save Privacy Settings
export const savePrivacySettings = async (privacySettings) => {
  return await axios.post(`${API_URL}/savePrivacySettings`, privacySettings);
};

// Get History Data
export const getHistoryData = async (email) => {
  return await axios.get(`${API_URL}/getHistory`, { params: { email } });
};