import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../Context/ProjectContext';

const ProjectList = () => {
  const { projects, loading, error, fetchAllProjects } = useProjects();
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    fetchAllProjects();
  }, [fetchAllProjects]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="bg-white mb-5 shadow rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-100 transition">
            <div
                className="flex items-center justify-center w-12 h-12 text-white rounded-full font-bold"
                style={{ backgroundColor: getRandomColor() }}
              >
                {project.name.charAt(0)}
              </div>  
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
