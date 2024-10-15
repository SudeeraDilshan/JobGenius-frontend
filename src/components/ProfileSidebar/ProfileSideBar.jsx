import React from 'react'
import './ProfileSideBar.css'
import { Link } from 'react-router-dom'

const ProfileSideBar = () => {
    return (

        <div className="sidebar-profile">
            <ul>
                <li><Link to="/profile/"><button>Profile</button></Link></li>
                <li><Link to="/profile/notification"><button>Notifications</button></Link></li>
                <li><Link to="/profile/security"><button>Security</button></Link></li>
                <li><Link to="/profile/my-cvs"><button>My CVs</button></Link></li>
                <li><button>Log Out</button></li>
            </ul>
        </div>

    )
}

export default ProfileSideBar