import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './Features/Projects/ProjectDetail'
import  {AuthProvider } from './Context/AuthContext';
import { ProjectProvider } from './Context/ProjectContext'; // Correct import for named export
import Login from './Features/Auth/Login';
import ProjectList from './Features/Projects/ProjectList';
import MasterLayout from './Components/MasterLayout';

import ProtectedRoute from './Components/ProtectRoute'

function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router>
          <div className="h-screen flex bg-gray-100">
            <Routes>
            <Route
                path="/projects"
                element={
                  <MasterLayout>
                    <ProjectList />
                  </MasterLayout>
                }
              />
              <Route
                path="/project/:id"
                element={
                  <MasterLayout>
                    <ProjectDetail />
                  </MasterLayout>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;



