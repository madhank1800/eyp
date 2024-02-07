import React,{lazy} from "react";
import {  Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/privateRoute";
// import Employees from "../Employees";
const Employees = lazy(() => import('../Employees'));
const Documents = lazy(() => import('../Documents'));

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
      </Routes>
    </>
  );
};

export default AuthRouters;
