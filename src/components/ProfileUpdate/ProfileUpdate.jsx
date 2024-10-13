import './ProfileUpdate.css';
import React from 'react';
import { useState } from 'react';

const ProfileUpdate = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, phone, email });
  }
  return (
    <div className="profile-form-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-image-container">
          <img
            src="profile.jpg" 
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="phone number ..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};


export default ProfileUpdate