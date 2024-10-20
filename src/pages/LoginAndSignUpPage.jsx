import React, { useState } from 'react';
import './css/LoginSignup.css';
import { useNavigate } from 'react-router-dom'; 

const AuthForm = ({handleData}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // const setBase64Data = (data) => {
    //     localStorage.setItem('base64Data', data);
    // };

    // const getBase64Data = () => {
    //     return localStorage.getItem('base64Data');
    // };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username,
            password,
        };

        const base64Credentials = btoa(`${username}:${password}`);

        if (isLogin) {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${base64Credentials}`, 
                },
                body: JSON.stringify(userData),
            });
    
            const result = await response.json();
            if (response.ok) {

                console.log('Login successful:', result);
                // setBase64Data(base64Credentials);
                handleData(result.scope[0],result.name,base64Credentials);
                navigate('/home'); 

            } else {
                console.error('Login failed:', result);
            }

        } else {
            // Handle Signup Request
            // if (password !== confirmPassword) {
            //     console.error('Passwords do not match');
            //     return;
            // }

            // const signupData = {
            //     ...userData,
            //     email
            // };

            // const response = await fetch('http://localhost:9090/api/signup', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(signupData),
            // });

            // const result = await response.json();
            // if (response.ok) {
            //     console.log('Signup successful:', result);
            //     // Handle successful signup (e.g., redirect, set auth token)
            // } else {
            //     console.error('Signup failed:', result);
            // }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-header">
                    <img src="logo.jpg" alt="logo" />
                    <h2 className='auth-title'>{isLogin ? 'Login' : 'Signup'}</h2>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="auth-form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="auth-signup-extra">
                            <div className="auth-form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="auth-form-group">
                                <label htmlFor="userType">User Type:</label>
                                <select
                                    id="userType"
                                    value={userType}
                                    onChange={handleUserTypeChange}
                                    className='auth-dropdown'
                                >
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
