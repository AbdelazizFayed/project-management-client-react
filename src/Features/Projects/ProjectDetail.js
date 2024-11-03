import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../../Context/ProjectContext';
import ProjectOverview from './ProjectOverview';
import TaskList from '../Tasks/TaskList';
import Modal from '../../Components/Modal';
import ProjectForm from './ProjectForm';
import TaskForm from '../Tasks/TaskForm';
import { fetchProjectById } from '../../Services/ProjectService';

const ProjectDetail = () => {
  const { id } = useParams();
  const { projects, addProject, setProjects } = useProjects();
  const [project, setProject] = useState(null);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Check if the project exists in the context
    const existingProject = projects.find((proj) => proj.id === parseInt(id));

    if (existingProject) {
      setProject(existingProject);
    } else {
      // If not found in the context, fetch it from the server
      const fetchProject = async () => {
        try {
          const fetchedProject = await fetchProjectById(id);
          setProject(fetchedProject);
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };
      fetchProject();
    }
  }, [id, projects]);

  const handleAddTask = (task) => {
    const updatedTasks = project.tasks ? [...project.tasks, task] : [task];
    const updatedProject = { ...project, tasks: updatedTasks };
    setProject(updatedProject);
    setProjects((prevProjects) =>
      prevProjects.map((proj) => (proj.id === project.id ? updatedProject : proj))
    );
  };

  const handleAddProject = (newProject) => {
    addProject(newProject);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setTaskModalOpen(true);
  };

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }

  return (
    <main className="flex-1 p-6">
      <ProjectOverview project={project} />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setTaskModalOpen(true)}
      >
        Add Task
      </button>

      <TaskList tasks={project.tasks || []} onEditTask={handleEditTask} />

      <Modal isOpen={isProjectModalOpen} onClose={() => setProjectModalOpen(false)}>
        <ProjectForm
          project={project}
          onSubmit={handleAddProject}
          onClose={() => setProjectModalOpen(false)}
        />
      </Modal>

      <Modal isOpen={isTaskModalOpen} onClose={() => setTaskModalOpen(false)}>
        <TaskForm
          task={selectedTask}
          onSubmit={(task) => {
            handleAddTask(task);
            setSelectedTask(null);
            setTaskModalOpen(false);
          }}
          onClose={() => setTaskModalOpen(false)}
        />
      </Modal>
    </main>
  );
};

export default ProjectDetail;
