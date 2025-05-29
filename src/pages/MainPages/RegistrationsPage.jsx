import React from "react";
import { Card, Typography, Row, Col, Table, Tag } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const dataSource = [
  {
    key: "1",
    name: "John Doe",
    email: "john@example.com",
    date: "2025-05-28",
    status: "Active",
  },
  {
    key: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    date: "2025-05-27",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    date: "2025-05-26",
    status: "Pending",
  },
  {
    key: "4",
    name: "Michael Lee",
    email: "michael@example.com",
    date: "2025-05-25",
    status: "Active",
  },
  {
    key: "5",
    name: "Emily Davis",
    email: "emily@example.com",
    date: "2025-05-24",
    status: "Pending",
  },
];

const columns = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Registration Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "blue";
      if (status === "Inactive") color = "volcano";
      else if (status === "Active") color = "green";
      else if (status === "Pending") color = "orange";

      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const RegistrationsPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Customer Registrations</Title>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ textAlign: "center" }}>
            <UserAddOutlined style={{ fontSize: 32, color: "#1890ff" }} />
            <Title level={4} style={{ marginTop: 10 }}>
              120
            </Title>
            <Text>Total Registered</Text>
          </Card>
        </Col>
      </Row>

      <Card bordered title="Recent Registrations">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default RegistrationsPage;
