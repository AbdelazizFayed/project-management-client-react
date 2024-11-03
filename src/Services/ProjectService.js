import axiosInstance from './axiosInstance';
import API_URL from '../Config';

const Project_API_URL = `${API_URL}/Project`;
const token = localStorage.getItem('token'); 

export const fetchProjects = async () => {
  const response = await axiosInstance.get(`${Project_API_URL}/GetAllProjects`,{
    headers:{
      Authorization:  `Bearer ${token}`,
    }
  });
  return response.data;
};

export const fetchProjectById = async (id) => {
  const response = await axiosInstance.get(`${Project_API_URL}/${id}`);
  return response.data;
};

export const addProject = async (project) => {
  const response = await axiosInstance.post(`${Project_API_URL}/`, project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await axiosInstance.put(`${Project_API_URL}/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axiosInstance.delete(`${Project_API_URL}/${id}`);
  return response.data;
};
