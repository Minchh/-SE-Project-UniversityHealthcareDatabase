import axios from 'axios'

const API_URL = 'http://localhost:5001'; // Base URL for your backend API

export const registerUser = (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

export const loginUser = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
}; 