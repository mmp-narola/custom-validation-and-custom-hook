import React from 'react';
import { Navigate } from 'react-router-dom';


const AuthRoutes = ({ children }) => {
    const token = localStorage.getItem('token');
    return !token ? <div>{children}</div> : <Navigate to="/" />;
};


export default AuthRoutes;