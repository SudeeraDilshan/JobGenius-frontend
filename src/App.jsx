import React,{useState} from 'react'
import JobListingPage from './pages/JobListingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OpportunitiesPage from './pages/OpportunitiesPage'
import HirePage from './pages/HirePage'
import ProfilePage from './pages/ProfilePage'
import JobPreviewPage from './pages/JobPreviewPage'
import './App.css'
import AdminPage from './pages/AdminPage'
import {Navbar} from './components/Navbar/Navbar'

const App = () => {

  const [role,setRole] = useState('student');

  return (
    <div>
       <BrowserRouter>
        <Navbar role={role}/>
        <Routes>
          <Route path="/*" element={role=="student" ?<JobListingPage />:<AdminPage/>} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/job-preview/:jobId" element={<JobPreviewPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App