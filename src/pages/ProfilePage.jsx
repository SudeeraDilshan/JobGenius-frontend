import React from 'react' 
import ProfileSideBar from '../components/ProfileSidebar/ProfileSideBar'
import { Routes, Route } from 'react-router-dom' 
import ProfileUpdate from '../components/ProfileUpdate/ProfileUpdate'
import Notification from '../components/Notifications/Notification'
import Security from '../components/SecurityUpdate/SecurityUpdate'
import MyCvs from '../components/CvsUpdate/CvsUpdate'
import './css/ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profile-main'>
      <ProfileSideBar />
      <Routes>
        <Route path='/' element={<ProfileUpdate />} />
        <Route path='notification' element={<Notification />} />
        <Route path='security' element={<Security />} />
        <Route path='my-cvs' element={<MyCvs />} />
      </Routes>
    </div>
  )
}

export default ProfilePage
