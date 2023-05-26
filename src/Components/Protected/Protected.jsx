import React from 'react';
import useAuthentication from '../../Hooks/useAuthentication';
import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({children}) => {
  const {activeUser,isLoading}=useAuthentication();
  const location=useLocation();

    if(isLoading){
      return <h1>Loading....</h1>
    }
    if(activeUser?.email){
        return children ;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Protected;