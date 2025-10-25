import React from "react";
import { Helmet } from "react-helmet";
import AdminLayout from "../components/AdminLayout";

const Admin = () => {
  return (
    <div>
      <Helmet>
        <title>Admin - VintEdge</title>
      </Helmet>
      <AdminLayout />
    </div>
  );
};

export default Admin;
