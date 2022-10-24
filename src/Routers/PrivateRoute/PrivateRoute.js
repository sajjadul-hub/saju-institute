import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
/*
1.only allow authentication user to visit the route
2.Redirect user to the route they wamted to go before login.
3.
4.
*/ 
const PrivateRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const location=useLocation();
  if(loading){
    return<Spinner animation="border" variant="primary" />
  }
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children;
};

export default PrivateRoute;    