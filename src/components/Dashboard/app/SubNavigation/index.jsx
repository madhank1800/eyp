import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import logo from "../../../../assests/images/eyp03.png";

import {
  SettingOutlined,
  DiffOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./subnavigation.css";
const { Sider } = Layout;


export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="navigation"
      >
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ margin: "0 auto 40px", display: "block", width: "50px" }}
          />
        </div>
        <Menu mode="inline">
          <Menu.Item key={"Dashboard"} icon={<DashboardOutlined />}>
            <Link to={"/dashboard"} />
            Dashboard
          </Menu.Item>

          <Menu.Item key={"dashboard/Employee"} icon={<UserOutlined />}>
            <Link to={"/dashboard/employee"} />
            Employee
          </Menu.Item>
          <Menu.Item key={"dashboard/Documets"} icon={<DiffOutlined />}>
            <Link to={"/dashboard/documents"} />
            upload Documets
          </Menu.Item>
          <Menu.Item key={"Admin"} icon={<TeamOutlined />}>
            <Link to={"/admin"} />
            Admin
          </Menu.Item>
          <Menu.Item key={"settings"} icon={<SettingOutlined />}>
            <Link to={"/settings"} />
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
