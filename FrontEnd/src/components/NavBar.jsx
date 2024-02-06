import React from "react";
import { Menu, Avatar, Typography, Button } from "antd";
import {
  UserOutlined,
  SafetyCertificateOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const menuStyle = {
    height: "50px",
    lineHeight: "50px",
    fontSize: "18px",
  };

  const apiResponse = useSelector((state) => state.userData);
  const logout = useSelector((state) => state.setUserData);

  return (
    <>
      <Menu mode="horizontal" style={menuStyle}>
        <Menu.Item key="icon" disabled>
          <SafetyCertificateOutlined
            style={{ padding: 14, fontSize: 27, color: "#8a8686" }}
          />
        </Menu.Item>
        <Menu.Item key="name" disabled>
          {apiResponse && (
            <Typography.Text keyboard>{apiResponse?.name}</Typography.Text>
          )}
        </Menu.Item>
        <Menu.Item key="logout" disabled style={{ marginLeft: "auto" }}>
          {apiResponse === null || apiResponse === undefined ? null : (
            <Button
              type="link"
              icon={<LogoutOutlined />}
              danger
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Menu.Item>

        <Menu.Item key="avatar" disabled>
          {apiResponse === null || apiResponse === undefined ? (
            <Avatar size="large" icon={<UserOutlined />} />
          ) : (
            <Avatar
              size="large"
              icon={apiResponse.email_verified ? null : <UserOutlined />}
              src={apiResponse.email_verified ? apiResponse.picture : null}
            />
          )}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavBar;
