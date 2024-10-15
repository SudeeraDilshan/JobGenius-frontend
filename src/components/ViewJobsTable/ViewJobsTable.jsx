import './ViewJobsTable.css';
import React from 'react';

const ViewJobsTable = () => {
    return (
        <div>
            <h1>Job Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Category</th>
                        <th>Engagement</th>
                        <th>Working Mode</th>
                        {/* <th>Location</th> */}
                        <th>Salary</th>
                        {/* <th>Description</th>
                        <th>Company</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {jobs.map(job => (
                        <tr key={job._id}>
                            <td>{job.position}</td>
                            <td>{job.category}</td>
                            <td>{job.engagement}</td>
                            <td>{job.working_mode}</td>
                            <td>{job.location}</td>
                            <td>{job.salary}</td>
                            <td>{job.description}</td>
                            <td>{job.company}</td>
                            <td>
                                <button onClick={() => deleteJob(job._id)}>Delete</button>
                                <button onClick={() => updateJob(job._id, job)}>Edit</button>
                            </td>
                        </tr>
                    ))} */}
                    {[
        {
            _id: "1",
            position: "Backend Developer",
            category: "Software",
            engagement: "Full-time",
            working_mode: "Remote",
            location: "New York",
            salary: "$3200",
            description: "Develop backend APIs",
            company: "Tech Solutions"
        },
        {
            _id: "2",
            position: "Frontend Developer",
            category: "Software",
            engagement: "Part-time",
            working_mode: "Hybrid",
            location: "San Francisco",
            salary: "$2800",
            description: "Build UI components",
            company: "Creative Labs"
        },
        {
            _id: "3",
            position: "Project Manager",
            category: "Management",
            engagement: "Contract",
            working_mode: "Onsite",
            location: "Los Angeles",
            salary: "$5000",
            description: "Manage projects and teams",
            company: "Projectify"
        }
    ].map(job => (
        <tr key={job._id}>
            <td>{job.position}</td>
            <td>{job.category}</td>
            <td>{job.engagement}</td>
            <td>{job.working_mode}</td>
            {/* <td>{job.location}</td> */}
            <td>{job.salary}</td>
            {/* <td>{job.description}</td>
            <td>{job.company}</td> */}
            <td>
                <button onClick={() => console.log('Delete', job._id)} className='delete-button'>Delete</button>
                <button onClick={() => console.log('Edit', job._id)}>Edit</button>
            </td>
        </tr>
    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewJobsTable