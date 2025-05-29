import { Card, Row, Col, Table, Typography, Breadcrumb } from "antd";
import {
  ShoppingCartOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const dataSource = [
  {
    key: "1",
    orderId: "ORD-001",
    customer: "John Doe",
    status: "Pending",
    date: "2025-05-28",
    total: "$120.00",
  },
  {
    key: "2",
    orderId: "ORD-002",
    customer: "Jane Smith",
    status: "Delivered",
    date: "2025-05-27",
    total: "$80.00",
  },
  {
    key: "3",
    orderId: "ORD-003",
    customer: "Michael Johnson",
    status: "Shipped",
    date: "2025-05-26",
    total: "$150.00",
  },
  {
    key: "4",
    orderId: "ORD-004",
    customer: "Emily Davis",
    status: "Cancelled",
    date: "2025-05-25",
    total: "$0.00",
  },
  {
    key: "5",
    orderId: "ORD-005",
    customer: "David Wilson",
    status: "Processing",
    date: "2025-05-24",
    total: "$200.00",
  },
  {
    key: "6",
    orderId: "ORD-006",
    customer: "Sarah Brown",
    status: "Delivered",
    date: "2025-05-23",
    total: "$65.00",
  },
  {
    key: "7",
    orderId: "ORD-007",
    customer: "Chris Lee",
    status: "Pending",
    date: "2025-05-22",
    total: "$95.00",
  },
  {
    key: "8",
    orderId: "ORD-008",
    customer: "Anna Kim",
    status: "Shipped",
    date: "2025-05-21",
    total: "$110.00",
  },
  {
    key: "9",
    orderId: "ORD-009",
    customer: "Robert Martinez",
    status: "Delivered",
    date: "2025-05-20",
    total: "$75.00",
  },
  {
    key: "10",
    orderId: "ORD-010",
    customer: "Laura Walker",
    status: "Processing",
    date: "2025-05-19",
    total: "$130.00",
  },
];

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <span
        style={{
          color: text === "Delivered" ? "#52c41a" : "#faad14",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

const OrdersPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Orders</Breadcrumb.Item>
      </Breadcrumb>

      <Title level={3}>Orders</Title>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <ShoppingCartOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <Title level={4} style={{ marginTop: 10 }}>
              Total Orders: 240
            </Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <ClockCircleOutlined style={{ fontSize: 24, color: "#faad14" }} />
            <Title level={4} style={{ marginTop: 10 }}>
              Pending: 35
            </Title>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <CheckCircleOutlined style={{ fontSize: 24, color: "#52c41a" }} />
            <Title level={4} style={{ marginTop: 10 }}>
              Delivered: 180
            </Title>
          </Card>
        </Col>
      </Row>

      <Card title="Recent Orders">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default OrdersPage;
