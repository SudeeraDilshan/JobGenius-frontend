import React from 'react' 
import ProfileSideBar from '../components/ProfileSidebar/ProfileSideBar'
import { Routes, Route } from 'react-router-dom' 
import ProfileUpdate from '../components/ProfileUpdate/ProfileUpdate'
import Notification from '../components/Notifications/Notification'
import Security from '../components/SecurityUpdate/SecurityUpdate'
import MyCvs from '../components/CvsUpdate/CvsUpdate'
import './css/ProfilePage.css'
import SideBarAdmin from '../components/SideBarAdmin/SideBarAdmin'
import AddJobForm from '../components/AddJobForm/AddJobForm'

const ProfilePage = () => {
  return (
    <div className='profile-main'>
      <ProfileSideBar />
      <Routes>
        <Route path='/' element={<ProfileUpdate />} />
        <Route path='notification' element={<SideBarAdmin />} />
        <Route path='security' element={<Security />} />
        <Route path='my-cvs' element={<AddJobForm />} />
      </Routes>
    </div>
  )
}

export default ProfilePage
