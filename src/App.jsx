import React from 'react'
import JobListingPage from './pages/JobListingPage'
import { Navbar } from './components/navbar/Navbar'
import { JobCard } from './components/jobcard/JobCard'
import { FilterComponent } from './components/filtercomponent/FilterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OpportunitiesPage from './pages/OpportunitiesPage'
import HirePage from './pages/HirePage'
import ProfilePage from './pages/ProfilePage'
import JobPreviewPage from './pages/JobPreviewPage'
import './App.css'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobListingPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/job-preview" element={<JobPreviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App