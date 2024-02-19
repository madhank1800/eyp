import React,{lazy} from "react";
import {  Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/privateRoute";
// import Employees from "../Employees";
const Employees = lazy(() => import('../Employees'));
const Documents = lazy(() => import('../Documents'));
const Enquiry = lazy(() => import('../Enquiry'));
const Viewdocs = lazy(() => import('../Documents/Viewdocuments'));

const AuthRouters = () => {
  return (
    <>
      <Routes>
        <Route
          path="employee"
          exact
          element={<PrivateRoute element={<Employees />} />}
        />
        <Route
          path="documents"
          exact
          element={<PrivateRoute element={<Documents />} />}
        />
        <Route
          path="enquiry"
          exact
          element={<PrivateRoute element={<Enquiry />} />}
        />
        <Route
          path="viewdocuments"
          exact
          element={<PrivateRoute element={<Viewdocs />} />}
        />
      </Routes>
    </>
  );
};

export default AuthRouters;
