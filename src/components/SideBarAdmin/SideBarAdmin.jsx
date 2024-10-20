import React from 'react'
import './SideBarAdmin.css'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
    return (
        <div className="sidebar">
        <ul>
            <li><Link to="/home"><button>View Jobs</button></Link></li>
            <li><Link to="/home/add-job"><button>Add Job</button></Link></li>
        </ul>
    </div>
    )
}

export default SideBarAdmin