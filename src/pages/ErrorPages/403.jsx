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
        <p className="error-code">403</p>
        <p className="error-message">Forbidden</p>
        <p className="error-description">
          You do not have permission to access this page.
        </p>
        <p className="error-description-two">
          Please contact the administrator.
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
