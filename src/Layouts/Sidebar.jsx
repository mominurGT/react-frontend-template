import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar/sidebar.css";
import { Layout, Menu, Button } from "antd";
import logo from "../assets/images/brand_logo.png";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  EyeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const { Sider, Header } = Layout;

function Sidebar({ setActiveSidebar, collapsed, setCollapsed }) {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState([]);

  const isActive = (path) => location.pathname === path;

  // Handle resizing of the sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const pathToKeyMap = {
      "/dashboard": "1",
      "/orders": "2",
      "/registrations": "3",
      "/visitors": "4",
    };

    const currentPathKey = Object.keys(pathToKeyMap).find((path) =>
      location.pathname.includes(path)
    );
    setActiveKey([pathToKeyMap[currentPathKey] || "1"]);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.reload();
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sider
        className="sidebar-container"
        width={240}
        style={{
          height: "100%",
          backgroundColor: "#f5f9f5",
          display: "flex",
          flexDirection: "column",
          fontSize: "10px !important",
          position: "fixed",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
      >
        <div
          className="dgFoodLogo"
          style={{
            display: collapsed ? "" : "none",
            padding: "3px 15px",
            textAlign: "center",
          }}
        >
          <Header
            style={{
              backgroundColor: "#ffffff",
              padding: "0 16px",
              display: "flex",
              alignItems: "left",
            }}
          >
            <MenuOutlined
              onClick={toggleSidebar}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Header>
        </div>
        <div
          className="dgFoodLogo"
          style={{
            padding: "20px 88px",
            textAlign: "center",
            display: collapsed ? "none" : "",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: collapsed ? "30px" : "64px",
              transition: "all 0.2s ease-in-out",
            }}
          />
        </div>
        <div
          style={{
            display: collapsed ? "none" : "",
            color: "#28A745",
            padding: "3px 15px",
            textAlign: "center",
            fontSize: "19px",
          }}
        >
          <p>Demo Project System</p>
        </div>

        <div className="menu-section">
          <Menu
            mode="inline"
            style={{
              backgroundColor: "#FFFFFF",
              border: "none",
              fontSize: "16px",
            }}
            selectedKeys={activeKey}
          >
            <Menu.Item
              key="1"
              icon={<DashboardOutlined style={{ fontSize: 16 }} />}
            >
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: isActive("/dashboard") ? "#56AA5E" : "",
                }}
              >
                Dashboard
              </Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<ShoppingCartOutlined style={{ fontSize: 16 }} />}
            >
              <Link
                to="/orders"
                style={{
                  textDecoration: "none",
                  color: isActive("/orders") ? "#56AA5E" : "",
                }}
              >
                Orders
              </Link>
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<UserAddOutlined style={{ fontSize: 16 }} />}
            >
              <Link
                to="/registrations"
                style={{
                  textDecoration: "none",
                  color: isActive("/registrations") ? "#56AA5E" : "",
                }}
              >
                Registrations
              </Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<EyeOutlined style={{ fontSize: 16 }} />}>
              <Link
                to="/visitors"
                style={{
                  textDecoration: "none",
                  color: isActive("/visitors") ? "#56AA5E" : "",
                }}
              >
                Visitors
              </Link>
            </Menu.Item>
          </Menu>
        </div>

        <div
          style={{
            width: "100%",
            padding: "10% 16px 16px 16px",
            textAlign: "center",
            backgroundColor: "#FFF",
            position: "absolute",
            bottom: "0%",
          }}
        >
          <div
            className="logout-menu"
            style={{
              padding: collapsed ? "0px" : "10px",
              borderRadius: "12px",
            }}
          >
            <Button
              onClick={logout}
              className="large-device-logout-icon"
              type="primary"
              style={{
                marginTop: "10px",
                fontSize: collapsed ? "10px" : "14px",
                width: collapsed ? "50px" : "190px",
                height: collapsed ? "30px" : "36px",
                border: "1px solid #28A745",
                color: "#28A745",
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M10 14.1667C10 14.9416 10 15.3291 9.91482 15.647C9.68365 16.5098 9.00978 17.1836 8.14705 17.4148C7.82913 17.5 7.44164 17.5 6.66667 17.5H6.25C5.08515 17.5 4.50272 17.5 4.04329 17.3097C3.43072 17.056 2.94404 16.5693 2.6903 15.9567C2.5 15.4973 2.5 14.9149 2.5 13.75V6.25C2.5 5.08515 2.5 4.50272 2.6903 4.04329C2.94404 3.43072 3.43072 2.94404 4.04329 2.6903C4.50272 2.5 5.08515 2.5 6.25 2.5H6.66667C7.44164 2.5 7.82913 2.5 8.14705 2.58519C9.00978 2.81635 9.68365 3.49022 9.91482 4.35295C10 4.67087 10 5.05836 10 5.83333"
                  stroke="#28A745"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ display: collapsed ? "none" : "inline" }}>
                Logout
              </span>
            </Button>
          </div>
        </div>
      </Sider>
    </>
  );
}

export default Sidebar;
