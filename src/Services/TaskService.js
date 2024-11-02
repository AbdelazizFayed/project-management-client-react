import axiosInstance from "./axiosInstance";
const API_URL = 'https://api.example.com';

export const fetchTasksByProjectId = async (projectId) => {
  const response = await axiosInstance.get(`${API_URL}/projects/${projectId}/tasks`);
  return response.data;
};

export const addTask = async (projectId, task) => {
  const response = await axiosInstance.post(`${API_URL}/projects/${projectId}/tasks`, task);
  return response.data;
};

export const updateTask = async (projectId, taskId, task) => {
  const response = await axiosInstance.put(`${API_URL}/projects/${projectId}/tasks/${taskId}`, task);
  return response.data;
};

export const deleteTask = async (projectId, taskId) => {
  const response = await axiosInstance.delete(`${API_URL}/projects/${projectId}/tasks/${taskId}`);
  return response.data;
};
