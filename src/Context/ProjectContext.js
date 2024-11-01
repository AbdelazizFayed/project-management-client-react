import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addProject = (project) => setProjects((prev) => [...prev, project]);
  const addTask = (task) => setTasks((prev) => [...prev, task]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects, tasks, setTasks, addProject, addTask }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
