import React from 'react'
import './SideBarAdmin.css'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
    return (
        <div className="sidebar">
        <ul>
            <li><Link to="/"><button>View Jobs</button></Link></li>
            <li><Link to="/add-job"><button>Add Job</button></Link></li>
        </ul>
    </div>
    )
}

export default SideBarAdmin