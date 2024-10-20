import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthForm from './pages/LoginAndSignUpPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <AuthForm /> */}
    <App />
  </StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import App from './App.jsx';
// import AuthForm from './pages/LoginAndSignUpPage.jsx';
// import './index.css';

// const Root = () => {
//   const isAuthenticated = localStorage.getItem('auth-token'); // Check if user is logged in
//   const y = true;
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect to App if authenticated, otherwise go to login */}
//         <Route path="/*" element={y ? <App /> : <Navigate to="/login" />} />
//         <Route path="/login" element={<AuthForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Root />
//   </StrictMode>,
// );
