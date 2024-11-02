import axiosInstance from './axiosInstance';
import API_URL from '../Config';

const Project_API_URL = `${API_URL}/Project`;

export const fetchProjects = async () => {
  var token = localStorage.getItem('token'); 
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWxpY0pvaG5zb25AbWFuYWdlci5jb20iLCJqdGkiOiIwZjllNTkwNS0zM2U3LTRlMjAtYmY3OS0xMjAzNTEyMGU3MDYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNzMwNTU1NjkxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUyNjUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.CgNnarKFKM0Xx1Uwzv_6gZhjblGGApXhWldcf-p_Jlo"

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
