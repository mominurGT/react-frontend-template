import { Card, Row, Col, Typography } from "antd";
import {
  ShoppingCartOutlined,
  RiseOutlined,
  UserAddOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

const data = [
  { name: "Mon", orders: 240, visitors: 300 },
  { name: "Tue", orders: 139, visitors: 200 },
  { name: "Wed", orders: 980, visitors: 278 },
  { name: "Thu", orders: 390, visitors: 189 },
  { name: "Fri", orders: 480, visitors: 239 },
  { name: "Sat", orders: 380, visitors: 349 },
  { name: "Sun", orders: 430, visitors: 400 },
];

const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Dashboard</Title>

      {/* Stat Cards */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <div style={{ textAlign: "center" }}>
              <ShoppingCartOutlined
                style={{ fontSize: 40, color: "#1890ff" }}
              />
              <Title level={5} style={{ marginTop: 8 }}>
                New Orders
              </Title>
              <Text strong style={{ fontSize: 24 }}>
                1,245
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <div style={{ textAlign: "center" }}>
              <RiseOutlined style={{ fontSize: 40, color: "#52c41a" }} />
              <Title level={5} style={{ marginTop: 8 }}>
                Bounce Rate
              </Title>
              <Text strong style={{ fontSize: 24 }}>
                43%
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <div style={{ textAlign: "center" }}>
              <UserAddOutlined style={{ fontSize: 40, color: "#fa8c16" }} />
              <Title level={5} style={{ marginTop: 8 }}>
                User Registrations
              </Title>
              <Text strong style={{ fontSize: 24 }}>
                3,582
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <div style={{ textAlign: "center" }}>
              <EyeOutlined style={{ fontSize: 40, color: "#eb2f96" }} />
              <Title level={5} style={{ marginTop: 8 }}>
                Unique Visitors
              </Title>
              <Text strong style={{ fontSize: 24 }}>
                8,149
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Graphs Row */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card title="Orders Overview" bordered={false}>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#1890ff" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Visitors Overview" bordered={false}>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitors" fill="#52c41a" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
