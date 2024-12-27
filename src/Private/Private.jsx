import React, { useContext } from 'react';
import { AuthUserContext } from '../FireBase/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import { CirclesWithBar } from 'react-loader-spinner';

const Private = ({children}) => {
    const {user, isLoading}=useContext(AuthUserContext)
    const location=useLocation()
   
    
    if (isLoading) {
        return <div className='flex justify-center items-center h-[600px]'>
            <CirclesWithBar
             height="100"
             width="100"
             color="#091E3E"
             outerCircleColor="#091E3E"
             innerCircleColor="#091E3E"
             barColor="#091E3E"
             ariaLabel="circles-with-bar-loading"
             wrapperStyle={{}}
             wrapperClass=""
             visible={true}
            ></CirclesWithBar>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login' state={location.pathname} ></Navigate>
        </div>
    );
};

export default Private;