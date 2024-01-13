

import React from "react";
import './privateRoute.css';

import { Navigate } from "react-router-dom";
const privateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  
  console.log("Element:", Element);

  console.log("isAuthenticated:", isAuthenticated);

  return isAuthenticated ? (

   Element
    

  ) : (
    <Navigate to="/signin" />
  );
  
}

export default privateRoute;