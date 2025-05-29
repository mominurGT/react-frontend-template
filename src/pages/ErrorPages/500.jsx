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
        <p className="error-code">500</p>
        <p className="error-message">Internal Server Error</p>
        <p className="error-description">
          There is an internal problem with our server. Please try again later.
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
