// import React, { useState } from 'react';
// import './css/LoginSignup.css';

// const LoginSignup = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [userType, setUserType] = useState('student');

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     const handleUserTypeChange = (event) => {
//         setUserType(event.target.value);
//     };

//     return (
//         <div className="main-container-ls">
//             <div className="container-ls">
//                 <div className="title-logo">
//                     <img src="logo.jpg" alt="logo" />
//                     <h2 className='title'>{isLogin ? 'Login' : 'Signup'}</h2>
//                 </div>
//                 <form className="form-ls">
//                     <div className="form-group-ls">
//                         <label htmlFor="username">Username :</label>
//                         <input type="text" id="username" required />
//                     </div>
//                     <div className="form-group-ls">
//                         <label htmlFor="password">Password :</label>
//                         <input type="password" id="password" required />
//                     </div>
//                     {!isLogin && (
//                         <div className="form-group-login">
//                             <div className="form-group-ls">
//                                 <label htmlFor="confirmPassword">Confirm Password:</label>
//                                 <input type="password" id="confirmPassword" required />
//                             </div>
//                             <div className="form-group-ls">
//                                 <label htmlFor="text">Email :</label>
//                                 <input type="email" id="email" required />
//                             </div>
//                             <div className="form-group-ls">
//                                 <label htmlFor="userType">User Type:</label>
//                                 <select id="userType" value={userType} onChange={handleUserTypeChange} className='drop-down-menu'>
//                                     <option value="company">Company</option>
//                                     <option value="student">Student</option>
//                                 </select>
//                             </div>
//                         </div>
//                     )}
//                     <button type="submit" className="btn">
//                         {isLogin ? 'Login' : 'Signup'}
//                     </button>
//                 </form>
//                 <p className="toggle-text" onClick={toggleForm}>
//                     {isLogin ? 'Don’t have an account? Signup' : 'Already have an account? Login'}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginSignup;


import React, { useState } from 'react';
import './css/LoginSignup.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('student');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-header">
                    <img src="logo.jpg" alt="logo" />
                    <h2 className='auth-title'>{isLogin ? 'Login' : 'Signup'}</h2>
                </div>
                <form className="auth-form">
                    <div className="auth-form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="auth-form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    {!isLogin && (
                        <div className="auth-signup-extra">
                            <div className="auth-form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" required />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" required />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="userType">User Type:</label>
                                <select id="userType" value={userType} onChange={handleUserTypeChange} className='auth-dropdown'>
                                    <option value="company">Company</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                        </div>
                    )}
                    <button type="submit" className="auth-button">
                        {isLogin ? 'Login' : 'Signup'}
                    </button>
                </form>
                <p className="auth-toggle" onClick={toggleForm}>
                    {isLogin ? 'Don’t have an account? Signup' : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
