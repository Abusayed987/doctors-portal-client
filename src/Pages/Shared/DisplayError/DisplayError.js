import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => {
                //any toast
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something Went Wrong</p>
            <p className='text-red-400'>
                <i>{error.statusText || error.message}</i>
            </p>
            <h4 className="text-4xl">
                Please <button onClick={handleLogout} to='/login'>Logout</button> and log back in
            </h4>
        </div>
    );
};

export default DisplayError;