import axiosInstance from './axiosInstance';
import API_URL from '../Config';
const Auth_API_URL = `${API_URL}/Auth`;



export const login = async (email, password) => 
    {
    try {
      // Send login request
      const response = await axiosInstance.post(`${Auth_API_URL}/login`, {
        username: email, // Sending email as `username`
        password: password
      });
  
      const { token, refreshToken, user } = response.data;
  
      // Store tokens and user data in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
  
      return { token, refreshToken, user };
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
}


export const register = async (email, password) => {
  const response = await axiosInstance.post(`${Auth_API_URL}/register`, { email, password });
  return response.data;
};
