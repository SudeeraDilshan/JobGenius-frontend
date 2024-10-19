import React from 'react' 
import ProfileSideBar from '../components/ProfileSidebar/ProfileSideBar'
import { Routes, Route } from 'react-router-dom' 
import ProfileUpdate from '../components/ProfileUpdate/ProfileUpdate'
import Security from '../components/SecurityUpdate/SecurityUpdate'
import './css/ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profile-main'>
      <ProfileSideBar />
      <Routes>
        <Route path='/' element={<ProfileUpdate />} />
        <Route path='notification' element={<div></div>} />
        <Route path='security' element={<Security />} />
        <Route path='my-cvs' element={<div></div>} />
      </Routes>
    </div>
  )
}

export default ProfilePage
