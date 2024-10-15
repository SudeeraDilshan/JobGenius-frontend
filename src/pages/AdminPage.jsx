import React from 'react'
import './css/AdminPage.css'
import AdminSideBar from '../components/SideBarAdmin/SideBarAdmin'
import AddJobForm from '../components/AddJobForm/AddJobForm'
import { Routes, Route } from 'react-router-dom'
import ViewJobsTable from '../components/ViewJobsTable/ViewJobsTable'

const AdminPage = () => {
    return (
        <div className='admin-container'>
            <AdminSideBar />
            <Routes>
                <Route path='/' element={<AddJobForm />} />
                <Route path='/admin' element={<ViewJobsTable />} />
            </Routes>
        </div>
    )
}

export default AdminPage