import { useState, useEffect } from "react";
import { Card, Form, Input, Button, Alert, Image, Row, Col } from "antd";
import axios from "axios";
import logo from "../assets/images/brand_logo.png";

const Login = () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const login = Form.useWatch("login", form);
  const password = Form.useWatch("password", form);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = () => {
    return isValidEmail(login) && password;
  };

  useEffect(() => {
    setIsButtonEnabled(isFormValid());
  }, [login, password]);

  useEffect(() => {
    const values = form.getFieldsValue();
    if (values.login && isValidEmail(values.login) && values.password) {
      setIsButtonEnabled(true);
    }
  }, [form]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleLogin = async () => {
    setErrorMessage("");
    const apiURL = import.meta.env.VITE_API_BASE_URL + "users/login";

    try {
      const response = await axios.post(
        apiURL,
        {
          login: login,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", "Bearer " + token);

        if (token && token.split(".").length === 3) {
          const base64Url = token.split(".")[1];
          const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          const paddedBase64 = base64.padEnd(
            base64.length + ((4 - (base64.length % 4)) % 4),
            "="
          );
          const tokenPayload = JSON.parse(decodeBase64Unicode(paddedBase64));
          const userRef = tokenPayload.sub;

          if (tokenPayload && userRef) {
            localStorage.setItem("userData", JSON.stringify(tokenPayload));
            window.location.replace("/dashboard");
          } else {
            console.error("User reference not found in token");
          }
        } else {
          console.error("Invalid token format");
        }
      } else {
        console.error("Token not found in the response");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Email or Password is incorrect");
    }
  };

  function decodeBase64Unicode(str) {
    return decodeURIComponent(
      Array.prototype.map
        .call(
          atob(str),
          (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        )
        .join("")
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Col span={24}>
          <Card
            bordered
            style={{
              borderColor: "#D0D5DD",
              borderWidth: "1px",
              width: "100%",
              padding: "24px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Image src={logo} alt="Logo" width={78} preview={false} />
              <h4
                className="mt-3"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#475467",
                  marginTop: "8px",
                }}
              >
                Demo Project System
              </h4>

              {errorMessage && (
                <Alert
                  message={errorMessage}
                  type="error"
                  showIcon
                  className="mt-3"
                  style={{ textAlign: "left", marginTop: "12px" }}
                />
              )}

              <Form
                form={form}
                layout="vertical"
                onFinish={handleLogin}
                className="mt-4"
                requiredMark="optional"
                style={{ marginTop: "24px" }}
              >
                <Form.Item
                  label={
                    <div
                      style={{
                        fontSize: "16px",
                        color: "#344054",
                      }}
                    >
                      Email Address
                    </div>
                  }
                  name="login"
                  style={{ textAlign: "left" }}
                  rules={[
                    { required: true, message: "Email address is required" },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter email address" />
                </Form.Item>

                <Form.Item
                  label={
                    <div
                      style={{
                        fontSize: "16px",
                        color: "#344054",
                      }}
                    >
                      Password
                    </div>
                  }
                  name="password"
                  style={{ textAlign: "left" }}
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password size="large" placeholder="Enter password" />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  disabled={!isButtonEnabled}
                  style={{
                    backgroundColor: isButtonEnabled ? "#28A745" : "#d9d9d9",
                    borderColor: isButtonEnabled ? "#28A745" : "#d9d9d9",
                    color: isButtonEnabled ? "#fff" : "rgba(0, 0, 0, 0.25)",
                    cursor: isButtonEnabled ? "pointer" : "not-allowed",
                  }}
                >
                  Login
                </Button>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
