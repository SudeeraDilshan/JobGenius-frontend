
import React, { useState } from 'react';
import JobListingPage from './pages/JobListingPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import OpportunitiesPage from './pages/OpportunitiesPage';
import ProfilePage from './pages/ProfilePage';
import JobPreviewPage from './pages/JobPreviewPage';
import './App.css';
import AdminPage from './pages/AdminPage';
import { Navbar } from './components/Navbar/Navbar';
import AuthForm from './pages/LoginAndSignUpPage';

// Component to use location and render navbar accordingly
const Layout = ({ role }) => {
  const location = useLocation();
  return (
    <>
      {/* Show Navbar if path is not "/" */}
      {location.pathname !== "/" && <Navbar role={role} />}
    </>
  );
};

const App = () => {
  const [role, setRole] = useState('jobseeker');
  const [name, setName] = useState('');
  const [base64Credentials, setBase64Credentials] = useState('');

  const handleUserData = (role,name,base64Credentials) => {
    setRole(role);
    setName(name);
    setBase64Credentials(base64Credentials);
  };

  return (
    <div>
      <BrowserRouter>
        <Layout role={role} /> {/* Use Layout for handling location and Navbar */}
        <Routes>
          <Route path="/" element={<AuthForm  handleData={handleUserData}/>} />
          <Route path="/home/*" element={role === "jobseeker" ? <JobListingPage base64Credentials={base64Credentials} /> : <AdminPage company_name={name} base64Credentials={base64Credentials}/>} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/job-preview/:jobId" element={<JobPreviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
