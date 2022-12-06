import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/Authprovider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className='pb-96'>
            <progress className="progress "></progress>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoutes;