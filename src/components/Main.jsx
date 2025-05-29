import { useState } from "react";
import { Layout, Dropdown, Space, Menu } from "antd";
import {
  MenuOutlined,
  DownOutlined,
  LogoutOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Sidebar from "../Layouts/Sidebar";
import logo from "../assets/images/brand_logo.png";
import UserLogo from "../assets/images/brand_logo.png";

const { Content, Header, Footer } = Layout;

const Main = (props) => {
  const [activeSidebar, setActiveSidebar] = useState("mainMenu");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleSidebarChange = (sidebar) => {
    setActiveSidebar(sidebar);
    navigate("/dashboard");
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.reload();
  };
  const bankDescription = (sidebar) => {
    setActiveSidebar(sidebar);
    navigate("/description");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="1" onClick={bankDescription} icon={<BankOutlined />}>
        User Detail
      </Menu.Item>
      <Menu.Item key="2" onClick={logout} icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f9f5" }}>
      <Sidebar
        setActiveSidebar={() => handleSidebarChange("mainMenu")}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <Layout
        style={{
          marginLeft: collapsed ? "5%" : 240,
          transition: "margin-left 0.3s ease",
        }}
      >
        <Header
          style={{
            backgroundColor: "#28A745",
            color: "#ffffff",
            padding: "0 3%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <MenuOutlined
              onClick={toggleSidebar}
              style={{
                display: collapsed ? "none" : "inline",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            <img
              src={logo}
              alt="Logo"
              style={{
                display: collapsed ? "inline" : "none",
                marginLeft: "20px",
                width: "35px",
                height: "37px",
                transition: "all 0.2s ease-in-out",
              }}
            />
            <h3
              style={{
                display: collapsed ? "inline" : "none",
                margin: "0 0 0 16px",
              }}
            >
              Demo Project System
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
              <Space style={{ cursor: "pointer" }}>
                <img
                  src={UserLogo}
                  alt="User Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "5px",
                    border: "1px solid lightgray",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#ffffff",
                    textAlign: "left",
                    marginLeft: "8px",
                    lineHeight: "1.2",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginBottom: "2px",
                    }}
                  >
                    User name
                  </span>
                </div>
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", borderRadius: "12px" }}>
          <div>{props.component}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright &copy; Project Title {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
