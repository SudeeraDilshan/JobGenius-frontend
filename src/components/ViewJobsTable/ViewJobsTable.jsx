import './ViewJobsTable.css';
import React from 'react';

const ViewJobsTable = ({ Job_list,fetch_jobs}) => {
    const deleteJob = async (id) => {
        try {
            const url = `http://localhost:9090/api/jobs/${encodeURIComponent(id)}`;
            const response = await fetch(url, {
                method: 'DELETE', 
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete the job');
            }
    
            console.log(`Job with id ${id} deleted successfully`);
            fetch_jobs("BuildOps"); 
        } catch (error) {
            console.error('Error deleting the job:', error);
        }
    };
    return (
        <div className='container'>
            <h1>Job Management</h1>
            <div className="table-container">
                <table>
                    <thead >
                        <tr >
                            <th>Position</th>
                            <th>Category</th>
                            <th>Engagement</th>
                            <th>Working Mode</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Job_list.map(job => (
                                <tr key={job.id}>
                                    <td>{job.position}</td>
                                    <td>{job.category}</td>
                                    <td>{job.engagement}</td>
                                    <td>{job.working_mode}</td>
                                    <td>{job.salary}</td>
                                    <td>
                                        <button onClick={() => deleteJob(job.id)} className='delete-button'>Delete</button>
                                        <button onClick={() => console.log('Edit', job.id)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewJobsTable