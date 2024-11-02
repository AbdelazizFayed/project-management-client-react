import React, { createContext, useContext, useState, useEffect ,useCallback} from 'react';
import * as projectService from '../Services/ProjectService';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects
  const fetchAllProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await projectService.fetchProjects();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  

  // Add a project
  const addNewProject = async (project) => {
    try {
      const newProject = await projectService.addProject(project);
      setProjects((prevProjects) => [...prevProjects, newProject]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update a project
  const updateExistingProject = async (id, project) => {
    try {
      const updatedProject = await projectService.updateProject(id, project);
      setProjects((prevProjects) =>
        prevProjects.map((proj) => (proj.id === id ? updatedProject : proj))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a project
  const deleteProjectById = async (id) => {
    try {
      await projectService.deleteProject(id);
      setProjects((prevProjects) => prevProjects.filter((proj) => proj.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        addNewProject,
        updateExistingProject,
        deleteProjectById,
        fetchAllProjects
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
