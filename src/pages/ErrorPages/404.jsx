import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../../styles/Error/Error.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  let redirectURL = "/dashboard";

  const goToHome = () => {
    navigate(redirectURL);
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <p className="error-code">404</p>
        <p className="error-message">Sorry! The page was not found.</p>
        <p className="error-description">
          The page you are looking for no longer exists or has been moved
          elsewhere.
        </p>

        <Button
          type="primary"
          size="large"
          className="home-button"
          onClick={goToHome}
        >
          <ArrowLeftOutlined />
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
