import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../Context/ProjectContext';

const ProjectList = () => {
  const { projects, setProjects } = useProjects();

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'AlAdwaa' },
      { id: 2, name: 'Common' },
      { id: 3, name: 'Payment' },
    ];
    setProjects(mockData);
  }, [setProjects]);

  const colors = [
    'bg-purple-600', 'bg-green-600', 'bg-blue-600',
    'bg-red-600', 'bg-teal-600', 'bg-yellow-600',
  ];

  const getInitials = (name) => name ? name.charAt(0) : '?';
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="bg-white mb-6 shadow rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-100 transition">
              <div className={`flex items-center justify-center w-12 h-12 text-white rounded-full font-bold ${getRandomColor()}`}>
                {getInitials(project.name)}
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
