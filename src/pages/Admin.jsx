import React from "react";
import { Helmet } from "react-helmet";
import AdminLayout from "../components/AdminLayout";

const Admin = () => {
  return (
    <div>
      <Helmet>
        <title>Admin - VintEdge</title>
      </Helmet>
      {/* Outlet inside AdminLayout will render nested routes */}
      <AdminLayout />
    </div>
  );
};

export default Admin;
