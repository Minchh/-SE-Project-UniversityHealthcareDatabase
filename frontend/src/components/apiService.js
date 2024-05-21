import axios from 'axios'

const API_URL = 'http://localhost:5001'; // Base URL for your backend API

export const registerUser = async (email, password) => {
    return await axios.post(`${API_URL}/register`, { email, password });
};

export const loginUser = async (email, password) => {
    return await axios.post(`${API_URL}/login`, { email, password });
}; 