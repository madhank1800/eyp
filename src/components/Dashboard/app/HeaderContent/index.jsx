import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Menu, Dropdown } from "antd";
import "./headercontent.css";
import {
  AppstoreOutlined,
 MailFilled,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import photo from '@/style/images/photo.png';

import { Link, useNavigate } from "react-router-dom";

export default function HeaderContent({ data }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    
    navigate("/");
  };
  const dispatch = useDispatch();
  const { SubMenu } = Menu;

  const profileDropdown = (
    <div
      className="profileDropdown whiteBox shadow"
      style={{ minWidth: "200px" }}
    >
      <div className="pad15">
        <Avatar
          size="large"
          className="last"
          src={"photo"}
          style={{ float: "left" }}
        />
        <div className="info">
          <p className="strong">
            {data?.user?.firstname}-{data?.user?.lastname}
          </p>
          <p><MailFilled /> {data?.user?.email}</p>
        </div>
      </div>
      <div className="line"></div>
      <div></div>
      <div className="line"></div>
      <div>
        <Menu>
          <Menu.Item icon={<LogoutOutlined />} onClick={handleLogout}>
            logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div
      className="headerIcon"
      style={{ position: "absolute", right: 0, zIndex: "99" }}
    >
      <Dropdown
        overlay={profileDropdown}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Avatar className="last" icon={<PersonRoundedIcon style={{color:"#fffff"}}/>} />
      </Dropdown>
      <Avatar icon={<AppstoreOutlined />} />
      <Avatar icon={<BellOutlined />} />
    </div>
  );
}
