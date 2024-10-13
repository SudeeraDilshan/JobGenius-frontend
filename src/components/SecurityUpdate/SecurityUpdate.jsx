// import './SecurityUpdate.css';

// import React from 'react'

// const SecurityUpdate = () => {
//   const [currentpwd, setCurrentpwd] = useState('');
//   const [newpwd, setNewpwd] = useState('');
//   const [confirmpwd, setConfirmpwd] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log({ currentpwd, newpwd, confirmpwd });
//   }
//   return (
//     <div className="profile-form-container">
//       <form onSubmit={handleSubmit} className="profile-form">
//         {/* <div className="profile-image-container">
//           <img
//             src="Jobmember.png"
//             alt="Profile"
//             className="profile-image"
//           />
//         </div> */}
//         <div className="form-field">
//           <label htmlFor="currentpassword">Current Password</label>
//           <input
//             type="text"
//             id="currentpassword"
//             placeholder="password ..."
//             value={currentpwd}
//             onChange={(e) => setCurrentpwd(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="newpassword">New Password</label>
//           <input
//             type="password"
//             id="newpassword"
//             placeholder="new password ..."
//             value={newpwd}
//             onChange={(e) => setNewpwd(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="confirmpassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmpassword"
//             placeholder="confirm password ..."
//             value={confirmpwd}
//             onChange={(e) => setConfirmpwd(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="save-button">Save</button>
//       </form>
//     </div>
//   );
// }

// export default SecurityUpdate

import React, { useState } from 'react';
import './SecurityUpdate.css';

const SecurityUpdate = () => {
  const [currentpwd, setCurrentpwd] = useState('');
  const [newpwd, setNewpwd] = useState('');
  const [confirmpwd, setConfirmpwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePasswords = () => {
    if (!currentpwd) {
      return "Current password is required.";
    }
    if (newpwd.length < 6) {
      return "New password must be at least 6 characters long.";
    }
    if (newpwd !== confirmpwd) {
      return "New password and confirm password do not match.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validatePasswords();
    if (error) {
      setErrorMessage(error);
      return;
    }

    // Proceed with submission logic (e.g., API call)
    console.log({ currentpwd, newpwd, confirmpwd });
    setErrorMessage('');
  };

  return (
    <div className="profile-form-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-field">
          <label htmlFor="currentpassword">Current Password</label>
          <input
            type="password"
            id="currentpassword"
            placeholder="password ..."
            value={currentpwd}
            onChange={(e) => setCurrentpwd(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="newpassword">New Password</label>
          <input
            type="password"
            id="newpassword"
            placeholder="new password ..."
            value={newpwd}
            onChange={(e) => setNewpwd(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="confirm password ..."
            value={confirmpwd}
            onChange={(e) => setConfirmpwd(e.target.value)}
          />
        </div>

        {/* Display error message if validation fails */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default SecurityUpdate;
