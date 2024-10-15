import './AddJobForm.css';
import { useState } from 'react';
import React from 'react'

const AddJobForm = () => {
    const [formData, setFormData] = useState({
        position: '',
        category: '',
        engagement: '',
        working_mode: '',
        location: '',
        salary: '',
        description: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Process form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="two-items">
                <div className="form-group">
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="two-items">
                <div className="form-group">
                    <label>Engagement:</label>
                    <select
                        name="engagement"
                        value={formData.engagement}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select engagement</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Working Mode:</label>
                    <select
                        name="working_mode"
                        value={formData.working_mode}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select working mode</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
            </div>

            <div className="two-items">
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Company:</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}

export default AddJobForm