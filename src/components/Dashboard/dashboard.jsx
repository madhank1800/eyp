
import React from "react";
import './dashboard.css';
import { useSelector } from "react-redux";

const Dashboard = (props) => {
    const currentUser = useSelector(state => state.auth)
    console.log(currentUser) 
    return (
        <>
            <h2 style={{ marginTop:"170px" }}>Dashboard</h2>
        </>
    )
}

export default Dashboard;