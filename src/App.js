import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetail from './Features/Tasks/TaskDetail'
import  {AuthProvider } from './Context/AuthContext';
import { ProjectProvider } from './Context/ProjectContext'; // Correct import for named export
import Login from './Features/Auth/Login';
import ProjectList from './Features/Projects/ProjectList';

function App() {
  return (
    <AuthProvider>
      <ProjectProvider> {/* Wrap in ProjectProvider if context is needed */}
        <Router>
          <div className="h-screen flex">
            <Routes>
              {/* Protected routes */}
              <Route
                path="/Login"
                element={
                  <Login/>
                }

              />
              <Route
                path="/ProjectList"
                element={
                  <ProjectList/>
                }

              />
              {/* <Route
                path="/projects/:id"
                element={
                  <ProtectedRoute>
                    <div className="flex h-screen">
                      <Sidebar />
                      <div className="flex-1 flex flex-col">
                        <Navbar />
                        <main className="flex-1 p-6">
                          <ProjectDetail />
                        </main>
                      </div>
                    </div>
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route
                path="/projects/:projectId/tasks"
                element={
                  <ProtectedRoute>
                    <div className="flex h-screen">
                      <Sidebar />
                      <div className="flex-1 flex flex-col">
                        <Navbar />
                        <main className="flex-1 p-6">
                          <TaskList />
                        </main>
                      </div>
                    </div>
                  </ProtectedRoute>
                }
              /> */}


              {/* Public routes */}
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </div>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;


