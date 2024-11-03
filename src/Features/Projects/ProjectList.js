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
    <main className="flex-1 p-6 bg-gray-100 h-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="max-w-3xl mx-auto w-full space-y-4">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className="block">
            <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-200 transition-all duration-300">
              <div
                className="flex items-center justify-center w-12 h-12 text-white rounded-full font-bold"
                style={{ backgroundColor: getRandomColor() }}
              >
                {project.name
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProjectList;
