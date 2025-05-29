import { lazy, Suspense, useState, useEffect } from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import Loading from "../components/Loading";

const Error401 = lazy(() => import("../pages/ErrorPages/401.jsx"));
const Error403 = lazy(() => import("../pages/ErrorPages/403.jsx"));
const Error404 = lazy(() => import("../pages/ErrorPages/404.jsx"));
const Error500 = lazy(() => import("../pages/ErrorPages/500.jsx"));

const Main = lazy(() => import("../components/Main.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Redirect = lazy(() => import("../pages/Redirect.jsx"));
const HomePage = lazy(() => import("../components/HomePage/HomePage.jsx"));
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));


import OrdersPage from '../pages/MainPages/OrdersPage.jsx';
import RegistrationsPage  from '../pages/MainPages/RegistrationsPage.jsx';
import VisitorsPage  from '../pages/MainPages/VisitorsPage.jsx';

const BaseLayout = (props) => {
  return props.isLoggedIn ? (
    <Main component={<Outlet />} />
  ) : (
    <Navigate to="/login" />
  );
};

function Router(props) {
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      props.setIsLoggedIn(true);
    }
    setIsAuthChecked(true);
  }, []);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="unauthorized" element={<Error401 />} />
        <Route path="forbidden" element={<Error403 />} />
        <Route path="not-found" element={<Error404 />} />
        <Route path="internal-server-error" element={<Error500 />} />
        <Route path="download-wqsc-detail" element={<Redirect />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />

        <Route element={<BaseLayout isLoggedIn={props.isLoggedIn} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="registrations" element={<RegistrationsPage />} />
          <Route path="/visitors" element={<VisitorsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;
