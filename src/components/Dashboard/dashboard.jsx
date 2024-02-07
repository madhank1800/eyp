import React, {  } from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";
import Navigation from "./app/SubNavigation";
import { Layout } from "antd";
import HeaderContent from "./app/HeaderContent";
import { Content } from "antd/es/layout/layout";
import AuthRouters from "../Routers/authRouters";

const Dashboard = (props) => {
  const currentUser = useSelector((state) => state.auth);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(currentUser);
  // const handleChange = (event) => {
  //   console.log(event.target.files[0]);
  // };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Navigation />
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderContent data={currentUser} />
          <Content style={{ marginTop: "100px" }}>
            <AuthRouters />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
