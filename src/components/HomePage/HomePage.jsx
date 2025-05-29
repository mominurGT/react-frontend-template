import React, { useEffect } from "react";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const HomePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/login";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <Col>
        <Title level={2} style={{ color: "green" }}>
          You are welcome
        </Title>
        <Title level={4} style={{ color: "black" }}>
          আপনাকে এখন লগইন পেজে নেওয়া হচ্ছে...
        </Title>
      </Col>
    </Row>
  );
};

export default HomePage;
