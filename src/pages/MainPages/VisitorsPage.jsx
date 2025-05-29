import React from "react";
import { Card, Typography, Row, Col, Table, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const dataSource = [
  {
    key: "1",
    name: "John Doe",
    visitDate: "2025-05-28",
    type: "New",
    location: "Dhaka",
  },
  {
    key: "2",
    name: "Jane Smith",
    visitDate: "2025-05-28",
    type: "Returning",
    location: "Chattogram",
  },
  {
    key: "3",
    name: "Emily Davis",
    visitDate: "2025-05-27",
    type: "New",
    location: "Khulna",
  },
  {
    key: "4",
    name: "Michael Lee",
    visitDate: "2025-05-27",
    type: "Returning",
    location: "Sylhet",
  },
  {
    key: "5",
    name: "Alice Johnson",
    visitDate: "2025-05-26",
    type: "New",
    location: "Rajshahi",
  },
];

const columns = [
  {
    title: "Visitor Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Visit Date",
    dataIndex: "visitDate",
    key: "visitDate",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      let color = type === "New" ? "green" : "blue";
      return <Tag color={color}>{type}</Tag>;
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
];

const VisitorsPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Unique Visitors</Title>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered style={{ textAlign: "center" }}>
            <EyeOutlined style={{ fontSize: 32, color: "#1890ff" }} />
            <Title level={4} style={{ marginTop: 10 }}>
              257
            </Title>
            <Text>Total Visitors</Text>
          </Card>
        </Col>
      </Row>

      <Card bordered title="Recent Visitor Logs">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default VisitorsPage;
